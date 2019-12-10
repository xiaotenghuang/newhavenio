import styled from 'styled-components';
import breakpoints from 'constants/theme/breakpoints';

import Box from 'components/shared/box';

export const HeroSection = styled(Box).attrs(() => ({
  forwardedAs: 'section',
}))`
  padding-bottom: 8rem;
  clip-path: polygon(0 89%, 0 0, 100% 0, 100% 80%, 40% 100%);

  @media screen and (min-width: ${breakpoints.md}) {
    clip-path: polygon(0 89%, 0 0, 100% 0, 100% 65%, 40% 100%);
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    clip-path: polygon(0 89%, 0 0, 100% 0, 100% 40%, 40% 100%);
  }
`;

export const EventSection = styled(Box).attrs(() => ({
  forwardedAs: 'section',
}))`
  clip-path: polygon(0 200px, 40% 0, 100% 100px, 100% 100%, 0 100%);
`;
