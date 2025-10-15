import { useContext, useState } from "react";
import habits from "../../data/habits";
import DetalleProducto from "../moleculas/DetalleProducto";
import Titulo from "../atomos/Titulo";
import { useNavigate, useParams } from "react-router-dom";

export default function Detalle() {
    const {id}= useParams();
    const product = habits.find((item) => item.id === Number(id));
    return(
    <div className="p-6 max-w-lg mx-auto">
        <Titulo text="Detalle del pedido" />
        <div className="border p-4 rounded mb-4">
              {product ? (
                <DetalleProducto product={product} />
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
     
    </div>
  );
}
