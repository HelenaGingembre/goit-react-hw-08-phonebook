import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkAuthNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: rgb(66, 152, 249);
  }
`;
