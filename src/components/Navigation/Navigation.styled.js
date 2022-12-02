import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: rgb(66, 152, 249);
    // background-image: linear-gradient(rgb(93, 196, 255), rgb(255, 250, 102));
  }
`;
