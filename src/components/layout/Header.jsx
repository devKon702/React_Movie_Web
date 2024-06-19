import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center items-center py-10 text-white gap-x-4">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
