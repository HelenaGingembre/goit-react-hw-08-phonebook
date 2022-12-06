import { LinkAuthNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <LinkAuthNav to="/register">Register </LinkAuthNav>
      <LinkAuthNav to="/login"> Log In</LinkAuthNav>
    </div>
  );
};
