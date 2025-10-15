import CardProducto from "../moleculas/CardProducto";
import habits from "../../data/habits";

export default function ListaProductos() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {habits.map((p) => (
          <div className="col-md-4" key={p.id}>
            <CardProducto product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

