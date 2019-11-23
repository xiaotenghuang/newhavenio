import styled from 'styled-components';

export const Path = styled.path`
  fill: ${p => (p.fillColor ? p.fillColor : '')};
  transition: fill 0.4s ease;
  :hover {
    fill: ${p => (p.hoverFillColor ? p.hoverFillColor : '')};
  }
`;
