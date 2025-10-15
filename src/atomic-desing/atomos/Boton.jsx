import React from "react";

export default function Boton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-primary ${className}`}
    >
      {text}
    </button>
  );
}
