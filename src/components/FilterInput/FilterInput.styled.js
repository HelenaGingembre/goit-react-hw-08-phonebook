import styled from 'styled-components';

export const Input = styled.input`
  height: 25px;
  width: 300px;
  margin-top: 3px;
  font-weight: 400;
  font-size: 13px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${p => p.theme.colors.gray};
  &:focus {
    border: 1px solid ${p => p.theme.colors.accent};
  }
  box-sizing: border-box;
`;
