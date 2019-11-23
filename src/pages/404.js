import React from 'react';
import Box from 'components/shared/box';
import Layout from 'components/layout';
import Text from 'components/shared/text';
import Title from 'components/shared/title';

const NotFound = () => (
  <Layout>
    <Box padding="2rem 4rem">
      <Title as="h2" size="large" color="Oranges.100">
        404
      </Title>
      <Text>Page Not found.</Text>
    </Box>
  </Layout>
);

export default NotFound;
