import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${p => p.theme.colors.accent};
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.blue_ciel};
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

export const Btn = styled.button`
  padding: 9px 20px;
  min-width: 90px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.accent};
  cursor: pointer;
  background-color: ${p => p.theme.colors.accent};
  :hover {
    background-image: ${p => p.theme.colors.hover};
  }
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border-color 250ms ease-in-out;
`;
