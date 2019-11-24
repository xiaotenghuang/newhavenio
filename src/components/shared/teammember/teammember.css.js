import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

export const Container = styled.div`
  max-width: 400px;
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Img = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
`;
