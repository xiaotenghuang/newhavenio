import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export async function handler(event, _context, callback) {
  const payload = JSON.parse(event.body);
  const email = encodeURIComponent(payload.params.email.trim());
  const SLACK_TOKEN = process.env.SLACK_TOKEN;
  const SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';
  const toSlack = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;

  await axios
    .get(`${SLACK_INVITE_ENDPOINT}?${toSlack}`)
    .then(response => {
      if (response.data.error != null) {
        callback(null, {
          statusCode: 400,
          body: JSON.stringify({
            email,
            error: response.data.error,
          }),
        });
      }

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          email,
          data: response.data,
        }),
      });
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          email,
          error: error.message,
        }),
      });
    });
}
