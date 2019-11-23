import React from 'react';

import Layout from 'components/layout';
import Head from 'components/head';
import Box from 'components/shared/box';
import Title from 'components/shared/title';

const About = () => (
  <Layout>
    <Head pageTitle="About" />
    <Box padding="2rem 4rem">
      <Title as="h2" size="large" color="Oranges.100">
        About
      </Title>
    </Box>
  </Layout>
);

export default About;
