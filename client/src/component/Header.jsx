import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/Profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/protected">Protected</NavLink>
      </li>
    </ul>
  );
};

export default Header;
