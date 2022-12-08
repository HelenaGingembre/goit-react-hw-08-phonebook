import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${p => p.theme.colors.secondary_color};

  &.active {
    color: ${p => p.theme.colors.accent};
    // background-image: linear-gradient(rgb(93, 196, 255), ${p =>
      p.theme.colors.yellow});
  }
`;
