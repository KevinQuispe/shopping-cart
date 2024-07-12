import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,0);

  return (
    <div className="cart-container">
      <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Articulo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tv</td>
            <td>10</td>
            <td>Total</td>
          </tr>
        </tbody>
      </table>
        <div>Lista Articulos: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        <hr />
        <div className="d-grid gap-2">
        <button onClick={() => console.log(cart)} className="btn btn-success">Comprar</button>
        <hr />
        </div>
        <div className="d-grid gap-2">
        <Link to={"/"}>
        <button className="btn btn-warning">Regregar a la tienda</button>
        </Link>
        </div>
       
      </div>
    </div>
  );
};
