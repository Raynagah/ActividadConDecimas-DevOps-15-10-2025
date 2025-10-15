import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../atomic-desing/plantillas/Header";
import { CarritoProvider } from "../context/CarritoContext";

describe("<Header />", () => {
	it("debe renderizar el título correctamente", () => {
		render(
			<BrowserRouter>
				<CarritoProvider>
					<Header />
				</CarritoProvider>
			</BrowserRouter>
		);

		expect(screen.getByText("🛍️ Mi Tienda")).toBeTruthy();
	});

	it("debe mostrar la cantidad total de productos en el carrito", () => {
		render(
			<BrowserRouter>
				<CarritoProvider>
					<Header />
				</CarritoProvider>
			</BrowserRouter>
		);

		// Total items = 2 + 3 = 5
		expect(screen.getByText("Productos en carrito:")).toBeTruthy();
		expect(screen.getByText("0")).toBeTruthy();
	});

	it("debe mostrar los enlaces de navegación", () => {
		render(
			<BrowserRouter>
				<CarritoProvider>
					<Header />
				</CarritoProvider>
			</BrowserRouter>
		);

		const tiendaLink = screen.getByText("Tienda React");
		const carritoLink = screen.getByText("Ver carrito");

		expect(tiendaLink).toBeTruthy();
		expect(carritoLink).toBeTruthy();
		expect(tiendaLink.closest("a").getAttribute("href")).toBe("/");
		expect(carritoLink.closest("a").getAttribute("href")).toBe("/cart");
	});
});
