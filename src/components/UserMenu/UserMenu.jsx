import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LinkUser, Span } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <LinkUser>
        Welcome, <Span>{user.name}</Span>
      </LinkUser>
      <LinkUser type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LinkUser>
    </div>
  );
};
