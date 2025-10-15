import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Titulo from "../atomos/Titulo";
import Boton from "../atomos/Boton";
import CarritoItem from "../moleculas/CarritoItem";
import FormularioCheckout from "../moleculas/FormularioCheckout";
import { useNavigate } from "react-router-dom";

export default function CheckoutDetail() {
  const { cart, clearCart } = useContext(CarritoContext);
  const [buyer, setBuyer] = useState({});
  const navigate = useNavigate();
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  const handleInput = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    if (!buyer.name || !buyer.email || !buyer.address) {
      alert("Completa todos los datos");
      return;
    }
    clearCart();
    alert(`Gracias por tu compra, ${buyer.name}!`);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Titulo text="Detalle del pedido" />
      <div className="border p-4 rounded mb-4">
        {cart.map((item) => (
          <CarritoItem key={item.id} item={item} />
        ))}
        <p className="text-lg font-semibold mt-2">Total: ${total}</p>
      </div>
      <FormularioCheckout buyer={buyer} onChange={handleInput} />
      <Boton text="Confirmar compra" className="mt-4" onClick={handleConfirm} />
    </div>
  );
}
