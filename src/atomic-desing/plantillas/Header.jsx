import React from "react";  

import { Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
export default function Header() {
  const { cart } = useCarrito();

  // 🧮 Total de items (sumando cantidades)
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <header className="navbar navbar-dark bg-dark p-3 d-flex justify-content-between align-items-center">
      <h1 className="text-light">🛍️ Mi Tienda</h1>
      <p className="text-light mb-0">
        Productos en carrito: <strong>{totalItems}</strong>
      </p>
      <div>
        <Link to="/" className="btn btn-outline-light me-2">Tienda React</Link>
        <Link to="/cart" className="btn btn-light">Ver carrito</Link>
      </div>
    </header>
  );
}
