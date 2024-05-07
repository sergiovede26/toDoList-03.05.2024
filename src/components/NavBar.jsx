import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to="/about">About us</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
