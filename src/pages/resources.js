import React from 'react';
import Layout from 'components/layout';
import Head from 'components/head';
import Title from 'components/shared/title';
import Box from 'components/shared/box';

const Resources = () => (
  <Layout>
    <Head pageTitle="Resources" />
    <Box padding="2rem 4rem">
      <Title as="h2" size="large" color="Oranges.100">
        Resources
      </Title>
    </Box>
  </Layout>
);

export default Resources;
