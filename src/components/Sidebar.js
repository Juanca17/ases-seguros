import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "gatsby"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/">Inicio</Link>
      <Link className="menu-item" to="/">Nosotros</Link>
      <Link className="menu-item" to="/">Seguros</Link>
    </Menu>
  );
};
