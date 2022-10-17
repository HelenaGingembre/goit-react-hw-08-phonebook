import React from 'react';
import PropTypes from 'prop-types';
import { Title, SectionPage } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionPage>
      {title && <Title>{title}</Title>}
      {children}
    </SectionPage>
  );
};

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
