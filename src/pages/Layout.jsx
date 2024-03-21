import { NavLink, Outlet } from "react-router-dom";
import "../styles/layout.css";

export default function Layout() {
  const linkStyles = ({ isActive }) =>
    isActive ? "link-style-active" : "link-style";

  return (
    <>
      <header>
        <NavLink className={linkStyles} to="/userlist">
          Список пользователей
        </NavLink>
        <NavLink className={linkStyles} to="/about">
          Обо мне
        </NavLink>
      </header>

      <Outlet />

      <footer>2024</footer>
    </>
  );
}
