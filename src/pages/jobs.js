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
import GithubIcon from 'images/github-icon.svg';

const Jobs = ({
  data: {
    pagesYaml: {
      jobs: { home },
    },
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
        href="https://github.com/newhavenio/newhavenio/"
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
        <JobPost
          company="Clarity SSI"
          jobURL="https://clarityssi.com"
          jobTitle="DevOps Engineer"
          location="Madison, CT // Remote"
          tech="ABC DEF GHI"
          salary="$100K"
          description="Let me give that oatmeal some brown sugar. That's how Tony Wonder lost a nut. For the same reason you should believe a hundred dollar bill is no more than a hundred pennies! Sorry, some of my students are arguing the significance of the shankbone on the seder plate. But we do not - NOT wag our genitals at one another to make a point."
        />
        <JobPost
          company="Clarity SSI"
          jobURL="https://clarityssi.com"
          jobTitle="DevOps Engineer"
          location="Madison, CT // Remote"
          tech="ABC DEF GHI"
          salary="$100K"
          description="Let me give that oatmeal some brown sugar. That's how Tony Wonder lost a nut. For the same reason you should believe a hundred dollar bill is no more than a hundred pennies! Sorry, some of my students are arguing the significance of the shankbone on the seder plate. But we do not - NOT wag our genitals at one another to make a point."
        />
        <JobPost
          company="Clarity SSI"
          jobURL="https://clarityssi.com"
          jobTitle="DevOps Engineer"
          location="Madison, CT // Remote"
          tech="ABC DEF GHI"
          salary="$100K"
          description="Let me give that oatmeal some brown sugar. That's how Tony Wonder lost a nut. For the same reason you should believe a hundred dollar bill is no more than a hundred pennies! Sorry, some of my students are arguing the significance of the shankbone on the seder plate. But we do not - NOT wag our genitals at one another to make a point."
        />
      </Box>
    </PageContainer>
  </Layout>
);

Jobs.propTypes = {
  data: P.shape({
    pagesYaml: P.any.isRequired,
  }),
};

export const jobsQuery = graphql`
  query JobsQuery {
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

export default Jobs;
