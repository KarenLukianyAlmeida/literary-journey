import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Minha Jornada</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/search">Procurar</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favoritos</NavLink>
          </li>
          <li>
            <NavLink to="/journey">Minha Jornada</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
