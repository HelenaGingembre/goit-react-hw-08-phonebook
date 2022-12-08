import styled from 'styled-components';

export const FooterApp = styled.footer`
  padding: 20px 0;
  position: fixed;
  align-content: center;
  width: 100%;
  bottom: 0px;
  //    background-color:
  background-image: linear-gradient(
    rgba(93, 196, 255, 0.5),
    rgba(255, 250, 102, 0.5)
  );
`;

export const SmallText = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.secondary_color};
`;
export const LinkFooter = styled.a`
  color: ${p => p.theme.colors.secondary_color};
  text-decoration: none;

  transition: color ${p => p.theme.variables.transition_duration}
    ${p => p.theme.variables.timing_function};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};

    transition: color ${p => p.theme.variables.transition_duration}
      ${p => p.theme.variables.timing_function};
  }
`;
export const SpanName = styled.span`
  color: ${p => p.theme.colors.accent};
  margin-left: 5px;
`;

export const SpanHeart = styled.span`
  color: ${p => p.theme.colors.accent};
  margin: 0 5px;
  animation: heartbeat 3000ms infinite linear;
  cursor: default;
  // Animation for emoji
  @keyframes heartbeat {
    0% {
      transform: scale(0.85);
      color: ${p => p.theme.colors.accent};
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.85);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.85);
      color: ${p => p.theme.colors.accent};
    }
    100% {
      transform: scale(0.85);
      color: ${p => p.theme.colors.yellow};
    }
    120% {
      transform: scale(1);
      color: ${p => p.theme.colors.yellow};
    }
    140% {
      transform: scale(0.85);
    }
    160% {
      transform: scale(1);
    }
    180% {
      transform: scale(0.85);
    }
    199% {
      color: ${p => p.theme.colors.yellow};
    }
    200% {
      transform: scale(0.85);
      color: ${p => p.theme.colors.accent};
    }
  }
`;
