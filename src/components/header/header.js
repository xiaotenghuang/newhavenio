import React from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import Button from 'components/shared/button';
import Title from 'components/shared/title';
import Text from 'components/shared/text';
import Box from 'components/shared/box';
import SplashShapeTop from 'images/splash-shape-top.svg';
import Nav from 'components/header/nav';
import Logo from 'components/shared/logo';
import { theme } from 'constants/theme';

import { Container } from './header.css';

const Header = () => (
  <Location>
    {({ location }) => (
      <>
        <Box
          display="flex"
          flexDirection="column"
          position="relative"
          padding="0 4rem 2rem"
          alignItems="flex-start"
          style={{
            overflow: 'hidden',
            height: 'auto',
          }}
        >
          {location.pathname === '/' && (
            <SplashShapeTop
              style={{
                position: 'absolute',
                top: '-110px',
                // left: '-4050px',
                left: '50%',
                transform: 'translateX(-60%)',
                marginLeft: '-50vw',
                zIndex: -1,
              }}
            />
          )}
          <Container isRoot={location.pathname === '/'}>
            <Link to="/">
              <Logo
                squareColor={theme.colors.Whites[100]}
                letterColor="transparent"
              />
            </Link>
            <Nav />
          </Container>
          {location.pathname === '/' && (
            <Box
              display="flex"
              flexDirection="column"
              maxWidth="860px"
              minHeight="480px"
              position="relative"
              padding="0 4rem"
              alignItems="flex-start"
            >
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
          )}
        </Box>
      </>
    )}
  </Location>
);

export default Header;
