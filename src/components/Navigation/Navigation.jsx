import { useAuth } from 'hooks';
import { Link } from './Navigation.styled.js';
// import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
