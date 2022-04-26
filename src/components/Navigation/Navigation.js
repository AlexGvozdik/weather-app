import { NavLink } from "react-router-dom";
import { isActive } from "../../utils/helpers";

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={isActive}>
        Your Cities
      </NavLink>

      <NavLink to="/search" className={isActive}>
        Search
      </NavLink>
    </nav>
  );
}
