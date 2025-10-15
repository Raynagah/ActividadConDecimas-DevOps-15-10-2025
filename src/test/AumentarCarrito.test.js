import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarritoProvider } from "../context/CarritoContext";
import CardProducto from "../atomic-desing/moleculas/CardProducto";
import Header from "../atomic-desing/plantillas/Header";
import { BrowserRouter } from "react-router-dom";

describe("Interacción CardProducto ↔ Header", () => {
	const productMock = {
		id: 1,
		name: "Producto Test",
		price: 100,
		image: "test.png",
		qty: 1
	};

	it("al hacer click en CardProducto, el Header muestra la cantidad correcta", () => {
		render(
			<BrowserRouter> 
				<CarritoProvider>
					<Header />
					<CardProducto product={productMock} />
				</CarritoProvider>
			</BrowserRouter>
		);

		// Inicialmente no hay productos
		expect(screen.getByText(/Productos en carrito:/i).textContent).toContain("0");

		// Simulamos click
		fireEvent.click(screen.getByText(/Agregar al carrito/i));
		expect(screen.getByText(/Productos en carrito:/i).textContent).toContain("1");
	});
});
