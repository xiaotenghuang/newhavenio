import React from 'react';
import Layout from 'components/layout';
import Head from 'components/head';
import Box from 'components/shared/box';
import Title from 'components/shared/title';

const Slack = () => (
  <Layout>
    <Head pageTitle="Slack" />
    <Box padding="2rem 4rem">
      <Title as="h2" size="large" color="Oranges.100">
        Slack
      </Title>
    </Box>
  </Layout>
);

export default Slack;
