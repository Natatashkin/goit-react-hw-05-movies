import { NavLink } from 'react-router-dom';
import { NavListLinks } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <NavListLinks>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="movies">
        <li>Movies</li>
      </NavLink>
    </NavListLinks>
  </nav>
);

export default Navigation;
