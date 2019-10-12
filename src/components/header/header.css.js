import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 4rem;

  a {
    color: ${p => p.theme.colors.Whites[100]};
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
