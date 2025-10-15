import React from "react";

export default function CarritoItem({ item }) {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <span>{item.name} (x{item.qty})</span>
      <span>${item.price * item.qty}</span>
    </div>
  );
}
