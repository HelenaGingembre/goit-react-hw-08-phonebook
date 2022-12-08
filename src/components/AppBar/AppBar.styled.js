import styled from 'styled-components';

export const HeaderAppBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.accent};
  background-image: linear-gradient(
    rgba(93, 196, 255, 0.5),
    rgba(255, 250, 102, 0.5)
  );
`;
