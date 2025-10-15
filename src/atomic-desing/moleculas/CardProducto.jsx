import React,{ useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Boton from "../atomos/Boton";
import Imagen from "../atomos/Imagen";
import Titulo from "../atomos/Titulo";

export default function CardProducto({ product }) {
    const { addToCart } = useContext(CarritoContext);

    return (
        <div className="card h-100">
            <Imagen src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body d-flex flex-column">
            <Titulo text={product.name} />
            <p className="card-text">${product.price}</p>
            <a
                className="btn btn-warning"
                href={`/detalle/${product.id}`}
            >Ver Detalle</a>
            <Boton
                text="Agregar al carrito"
                className="bnt btn-primary"
                onClick={() => addToCart(product)}
            />
            </div>
        </div>
    );
}
