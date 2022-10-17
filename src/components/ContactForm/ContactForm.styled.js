import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${p => p.theme.colors.accent};
  width: 500px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  height: 25px;
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
