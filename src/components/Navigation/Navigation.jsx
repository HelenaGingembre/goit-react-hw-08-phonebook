// import { useAuth } from 'hooks';
import { Link } from './Navigation.styled.js';
// import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  // const location = useLocation();
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {/* {isLoggedIn && ( */}
      <Link to="/contacts">Contacts</Link>
      {/* )} */}
      <Link to="/login">LoginTest</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};
