import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import Carrito from "../atomic-desing/pages/Carrito";

describe("Componente Carrito", () => {

	beforeEach(() => {
		const mockContext = {
			cart: [{ id: 1, nombre: "Producto 1", price: 10, quantity: 1 }],
			total: 10,
			clearCart: jasmine.createSpy("clearCart"),
		};

		render(
			<BrowserRouter>
				<CarritoContext.Provider value={mockContext}>
					<Carrito />
				</CarritoContext.Provider>
			</BrowserRouter>
		);

		
	});

	afterEach(() => {
		cleanup();
	});

	it("muestra el total correctamente", () => {
		const total = screen.getByText(/Total:/i);
		expect(total.textContent).toContain("10"); 
	});
});
