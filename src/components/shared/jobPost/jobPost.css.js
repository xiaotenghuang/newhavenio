import styled, { css } from 'styled-components';
import { layout, space, color, typography } from 'styled-system';

import Card from 'components/shared/card';
import Text from 'components/shared/text';

export const Article = styled(Card).attrs(() => ({ forwardedAs: 'article' }))`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    'date title'
    'description description'
    'image image'
    'rsvp rsvp';

  @media screen and (min-width: ${p => p.theme.breakpoints.xlLower}) {
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
      'date title featured-image'
      'blank image featured-image'
      'blank rsvp featured-image';
  }

  ${p =>
    p.type === 'featured' &&
    css`
      @media screen and (min-width: ${p => p.theme.breakpoints.xlLower}) {
        grid-template-rows: 2fr auto 1fr;
      }
    `};
  ${p =>
    p.type === 'compact' &&
    css`
      &&& {
        grid-template-columns: auto minmax(0, 1fr);
        grid-template-rows: 1fr auto;
        grid-template-areas:
          'date title'
          'rsvp rsvp';
        align-items: center;
        padding: 24px;
        grid-gap: 24px;
      }
    `};

  background-color: white;
  box-sizing: border-box;
  padding: 0;
`;

export const JobPrimary = styled(Text).attrs(() => ({ forwardedAs: 'h5' }))`
  color: ${p => p.theme.colors.Blues[100]};
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: normal;

  @media screen and (max-width: ${p => p.theme.breakpoints.xs}) {
    font-size: 20px;
  }
`;

export const JobSecondary = styled(Text).attrs(() => ({ forwardedAs: 'h6' }))`
  color: ${p => p.theme.colors.Blues[100]};
  font-size: 0.9em;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: normal;

  @media screen and (max-width: ${p => p.theme.breakpoints.xs}) {
    font-size: 18px;
  }
`;

export const JobTertiary = styled(Text).attrs(() => ({ forwardedAs: 'h6' }))`
  color: ${p => p.theme.colors.Blues[100]};
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: normal;

  @media screen and (max-width: ${p => p.theme.breakpoints.xs}) {
    font-size: 16x;
  }
`;

export const Description = styled.p`
  display: block;
  ${layout};
  ${space};
  ${color};
  ${typography};
`;
