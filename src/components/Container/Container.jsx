import React from 'react';
import PropTypes from 'prop-types';
import { MainContainer } from './Container.styled';
// export { default } from './Container';

export const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

Container.propType = {
  children: PropTypes.node.isRequired,
};
