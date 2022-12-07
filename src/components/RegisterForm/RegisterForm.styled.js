import styled from 'styled-components';
// Register form on Register page

export const Form = styled.form`
  width: 100%;
  margin: 0px auto 15px;
  padding: 15px;
  border: 1px solid ${p => p.theme.colors.border_color};
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

// Labels from inputs
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${p => p.theme.colors.secondary_color};
`;

// Labels text
export const Text = styled.text`
  margin-bottom: 5px;
`;

// Form inputs
export const Input = styled.input`
  padding: 11px;
  border: 1px solid ${p => p.theme.colors.secondary_color};
  border-radius: 4px;

  line-height: normal;

  transition: all ${p => p.theme.variables.transition_duration}
    ${p => p.theme.variables.timing_function};

  &:focus {
    outline: transparent;
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;

// // Register container
export const Divbtn = styled.div`
  text-align: center;
`;

// Register  button
export const Btn = styled.button`
  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  box-shadow: ${p => p.theme.variables.main_shadow};

  opacity: 1;

  transition: opacity ${p => p.theme.variables.transition_duration}
    ${p => p.theme.variables.timing_function};

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity ${p => p.theme.variables.transition_duration}
      ${p => p.theme.variables.timing_function};
  }

  &:disabled {
    background-color: ${p => p.theme.colors.inactive_color};
    cursor: auto;
  }
`;
