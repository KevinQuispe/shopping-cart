import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav className="navbar navbar-dark">
      <Link to={"/"} style={navStyles}>
        <h2>Tienda Online</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li  className="btn btn-danger">
            Carrito:<span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
   
  );
};
