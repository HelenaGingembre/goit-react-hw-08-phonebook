import PropTypes from 'prop-types';
import React, { createRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Title, Container } from './Title.styled';

// Компонент заголовка для страниц
export const TitlePage = ({ children }) => {
  const itemRef = createRef(null);

  return (
    // <CSSTransition
    //   in={true}
    //   appear={true}
    //   timeout={500}
    //   className="appear"
    //   nodeRef={itemRef}
    // >

    <Container>
      <Title ref={itemRef}>{children}</Title>
    </Container>

    // </CSSTransition>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

// export default Title;
