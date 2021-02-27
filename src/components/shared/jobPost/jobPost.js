import React, { useCallback } from 'react';
import P from 'prop-types';

import Box from 'components/shared/box';

import {
  Article,
  JobPrimary,
  JobSecondary,
  JobTertiary,
  Description,
} from './jobPost.css';

/**
 * A static component to display image, name, title and description of a team member
 */
const JobPost = ({
  company,
  hidden,
  jobURL,
  jobTitle,
  location,
  tech,
  salary,
  description,
}) => {
  const onCardClick = useCallback(() => window.open(jobURL), [jobURL]);

  return (
    <div>
      {!hidden && (
        <Article role="link" onClick={onCardClick}>
          <Box
            pl={{ _: 0, lg: 0 }}
            display="flex"
            flexDirection="column"
            justifyContent={{
              _: 'center',
            }}
            gridArea="title"
          >
            <JobPrimary>
              {company} ({location})
            </JobPrimary>
            <JobSecondary>
              {jobTitle}
              {salary ? (
                <span> || {salary}</span>
              ) : (
                <span> || Salary Not Provided</span>
              )}
            </JobSecondary>
            <JobTertiary>Tech: {tech}</JobTertiary>
            <Description
              mt={{ _: 0, lg: 16 }}
              mb={0}
              color="Grays.100"
              fontSize={3}
            >
              {description}
            </Description>
          </Box>
          <Box
            mt={{ _: 4, sm: 0 }}
            ml={{ _: 0, sm: 2 }}
            alignSelf={{ sm: 'flex-end' }}
            alignItems="flex-end"
          ></Box>
        </Article>
      )}
      <br />
    </div>
  );
};

JobPost.propTypes = {
  company: P.string.isRequired,
  hidden: P.string,
  jobURL: P.string.isRequired,
  jobTitle: P.string.isRequired,
  location: P.string.isRequired,
  tech: P.string.isRequired,
  salary: P.string,
  description: P.string.isRequired,
};

export default JobPost;
