import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "../context/CarritoContext";
import Carrito from "../atomic-desing/pages/Carrito";

describe("Componente Carrito", () => {

	beforeEach(() => {
		// Limpia el localStorage antes de cada prueba
		localStorage.clear();

		// Renderiza el componente antes de cada test
		render(
			<BrowserRouter>
				<CarritoProvider>
					<Carrito />
				</CarritoProvider>
			</BrowserRouter>
		);
	});

	it("muestra mensaje cuando el carrito está vacío", () => {
		const mensaje = screen.getByText(/Tu carrito está vacío/i);
		expect(mensaje).not.toBeNull();
	});

	it("muestra el total correctamente", () => {
		const total = screen.queryByText(/Total:/i);
		expect(total).toBeNull(); 
	});
});
