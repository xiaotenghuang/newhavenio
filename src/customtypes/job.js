import P from 'prop-types';

const Job = P.shape({
  node: P.shape({
    company: P.string.isRequired,
    hidden: P.string,
    jobURL: P.string.isRequired,
    location: P.string.isRequired,
    remote: P.string.isRequired,
    jobTitle: P.string.isRequired,
    salary: P.string,
    tech: P.string.isRequired,
    postedOn: P.string.isRequired,
    description: P.string.isRequired,
  }),
});

export default Job;
