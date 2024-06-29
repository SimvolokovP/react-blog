import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="header__nav">
      <ul className="header__nav--list list-reset">
        <li>
          <NavLink className="header__link" to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="header__link" to={"/"}>
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
