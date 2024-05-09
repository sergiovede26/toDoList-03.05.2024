import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

function NavBar() {
  return (
    <div className="navBarContainer">
      <nav>
        <NavLink to="/about"className={"aboutLink"}>About us</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
