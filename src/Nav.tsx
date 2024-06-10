import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const handleNav = ({ isActive }: { isActive: boolean }): CSSProperties => {
    let color = isActive ? "black" : "gray";
    let fontWeight = isActive ? "bold" : "";
    return { color, fontWeight };
  };
  const Navs = ({
    children,
    to,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    return (
      <li>
        <NavLink to={to} style={handleNav}>
          {children}
        </NavLink>
      </li>
    );
  };
  return (
    <div className="nav">
      <ul className="section">
        <Navs to="/">profile</Navs>
        <Navs to="/content">content</Navs>
        <Navs to="/profile">profile</Navs>
        <Navs to="/contact">contact</Navs>
      </ul>
    </div>
  );
};

export default Nav;
