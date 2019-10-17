import React from 'react';
import Layout from 'components/layout';
import Box from 'components/shared/box';
import Button from 'components/shared/button';
import Title from 'components/shared/title';
import Text from 'components/shared/text';
import SplashShapeTop from 'images/splash-shape-top.svg';
import SplashShapeBottom from 'images/splash-shape-bottom.svg';

const Index = () => (
  <Layout>
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="960px"
      minHeight="480px"
      position="relative"
      padding="0 4rem"
      alignItems="flex-start"
      style={{
        overflow: 'hidden',
      }}
    >
      <SplashShapeTop
        style={{
          position: 'absolute',
          top: '-210px',
          // left: '-4050px',
          // left: '20%',
          transform: 'translateX(-60%)',
          zIndex: -1,
        }}
      />
      <Title as="h2" size="large" color="Whites.100">
        Where tech happens in New Haven.
      </Title>
      <Box maxWidth="640px">
        <Text as="p" color="Whites.100">
          NewHaven.io is a tech community lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
      </Box>
      <Button.Wrapper>
        <Button palette="secondary">Join the Slack</Button>
        <Button palette="tertiary">Join the Meetup</Button>
      </Button.Wrapper>
    </Box>
    <Box padding="0 4rem">
      <Title as="h2" size="large" color="Grays.100">
        Join the Slack Community
      </Title>
    </Box>
    <Box
      minHeight="300px"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      padding="6rem 4rem 0"
      style={{
        overflow: 'hidden',
      }}
    >
      <SplashShapeBottom
        style={{
          position: 'absolute',
          top: '0',
          right: '-8400px',
          // transform: 'translateX(70%)',
          // left: '0',
          // right: '0',
          // margin: 'auto',
          zIndex: -1,
        }}
      />
      <Title as="h2" size="large" color="Grays.100">
        Meet People IRL
      </Title>
    </Box>
  </Layout>
);

export default Index;
