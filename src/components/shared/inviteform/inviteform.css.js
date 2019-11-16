import styled, { css } from 'styled-components';
import { theme } from 'constants/theme';

export const Container = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 18px;
  padding: 1rem;
  background-color: white;
  border: 1px solid ${p => p.theme.colors.Grays[8]};
  width: 240px;
  color: ${p => p.theme.colors.Grays[100]};
  ::placeholder {
    color: ${p => p.theme.colors.Grays[60]};
  }
`;
