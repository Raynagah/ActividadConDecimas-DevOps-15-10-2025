import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./atomic-desing/plantillas/Layout";
import ListaProductos from "./atomic-desing/pages/ListaProductos";
import Carrito from "./atomic-desing/pages/Carrito";
import Detalle from "./atomic-desing/pages/Detalle";
import CheckoutDetail from "./atomic-desing/pages/Checkout";
import { CarritoProvider } from "./context/CarritoContext";

export default function App() {
	return (
		<CarritoProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<ListaProductos />} />
						<Route path="/cart" element={<Carrito />} />
						<Route path="/checkout" element={<CheckoutDetail />} />
						<Route path="/detalle/:id" element={<Detalle />} />
					</Routes>
				</Layout>
			</Router>
		</CarritoProvider>
	);
}
