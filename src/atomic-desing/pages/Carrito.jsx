import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import CarritoItem from "../moleculas/CarritoItem";
import Boton from "../atomos/Boton";
import Titulo from "../atomos/Titulo";

export default function Carrito() {
    const { cart, total, clearCart } = useContext(CarritoContext);

  if (cart.length === 0) return <p className="p-4" >Tu carrito está vacío.</p>;

  return (
    <div className="container py-4">
      <Titulo text="Carrito de compra" />
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <CarritoItem key={item.id} item={item} />
        ))}
      </ul>
      <h5 id="total">Total: ${total}</h5>
      <div className="d-flex gap-2 mt-3">
        <Link to="/checkout">
          <Boton text="Continuar al detalle del pedido →" variant="success" />
        </Link>
        <Boton text="Vaciar carrito" variant="danger" onClick={clearCart} />
      </div>
    </div>
  );
}
