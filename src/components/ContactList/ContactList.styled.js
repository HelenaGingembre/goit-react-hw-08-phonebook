import styled from 'styled-components';

export const ButtonDelete = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  padding: 2px;
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
export const ContactListLi = styled.li`
  padding: 3px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted ${p => p.theme.colors.accent};
`;
export const ContactListBox = styled.ul`
  width: 500px;
  list-style: circle;
  padding: 20px;
`;
