import styled from 'styled-components';

export const ButtonDelete = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  padding: 2px;
`;
export const ContactListLi = styled.li`
  padding: 0 2px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted ${p => p.theme.colors.accent};
`;
export const ContactListBox = styled.ul`
  width: 500px;
  list-style: circle;
  padding: 20px;
`;
