import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: inline;
  margin: 10px 0;

  font-size: 1.5rem;

  color: ${p => p.theme.colors.accent};

  opacity: 1;
  transition: opacity ${p => p.theme.variables.transition_duration} linear;

  cursor: default;

  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity ${p => p.theme.variables.transition_duration}
      ${p => p.theme.variables.timing_function};
  }

  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;
