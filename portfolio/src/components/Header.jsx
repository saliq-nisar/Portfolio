import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css"; 
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyPortfolio</Link>
      </div>
      <nav>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
