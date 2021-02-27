import React from 'react';
import P from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Head from 'components/head';
import Box from 'components/shared/box';
import PageContainer from 'components/shared/pagecontainer';
import Button from 'components/shared/button';
import Title from 'components/shared/title';
import Text from 'components/shared/text';
import JobPost from 'components/shared/jobPost';
import { Job } from 'customtypes';
import GithubIcon from 'images/github-icon.svg';

const Jobs = ({
  data: {
    pagesYaml: {
      jobs: { home },
    },
    allJobsYaml: { edges: jobPosts },
  },
}) => (
  <Layout>
    <Head pageTitle={home.title} />
    <PageContainer>
      <Title as="h2" size="large" color="Oranges.100">
        {home.title}
      </Title>
      <Text as="p" fontSize="3">
        {home.description}
      </Text>
      <Button
        as="a"
        href="https://github.com/newhavenio/newhavenio/tree/master/content/jobs"
        target="_blank"
        rel="noopener noreferrer"
        prefixIcon={<GithubIcon />}
      >
        {home.submitpr}
      </Button>
      <Box my={4}>
        <Title
          color="Oranges.100"
          size="small"
          weight="800"
          py="1rem"
          textTransform="uppercase"
        >
          Local-ish Jobs
        </Title>
        {jobPosts.map(({ node: jobPost }) => (
          <JobPost
            company={jobPost.company}
            hidden={jobPost.hidden}
            jobURL={jobPost.jobURL}
            jobTitle={jobPost.jobTitle}
            location={jobPost.location}
            remote={jobPost.remote}
            tech={jobPost.tech}
            salary={jobPost.salary}
            description={jobPost.description}
          />
        ))}
      </Box>
    </PageContainer>
  </Layout>
);

export const jobPostsQuery = graphql`
  query JobPosts2Query {
    allJobsYaml {
      edges {
        node {
          company
          hidden
          description
          jobTitle
          jobURL
          location
          remote
          salary
          tech
        }
      }
    }
    pagesYaml {
      jobs {
        home {
          title
          description
          submitpr
        }
      }
    }
  }
`;

Jobs.propTypes = {
  data: P.shape({
    pagesYaml: P.any.isRequired,
    allJobsYaml: P.shape({
      edges: P.arrayOf(Job),
    }),
  }),
};

export default Jobs;
