import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { CarritoContext } from "../context/CarritoContext";
import CardProducto from "../atomic-desing/moleculas/CardProducto";

describe("CardProducto", () => {
	let mockAddToCart;
	let mockProduct;

	beforeEach(() => {
		// Creamos mocks para las funciones y datos
		mockAddToCart = jasmine.createSpy("addToCart");
		mockProduct = {
			id: 1,
			name: "Producto Test",
			price: 1500,
			image: "imagen.png",
		};

		// Renderizamos el componente con un contexto simulado
		render(
			<CarritoContext.Provider value={{ addToCart: mockAddToCart }}>
				<CardProducto product={mockProduct} />
			</CarritoContext.Provider>
		);
	});

	afterEach(() => {
		cleanup();
	});

	it("debe mostrar el nombre, precio e imagen del producto", () => {
		expect(screen.getByText("Producto Test")).not.toBeNull();
		expect(screen.getByText("$1500")).not.toBeNull();

		const image = screen.getByAltText("Producto Test");
		expect(image).not.toBeNull();
		expect(image.getAttribute("src")).toBe("imagen.png");
	});

	it("debe llamar a addToCart con el producto al hacer clic", () => {
		const button = screen.getByText("Agregar al carrito");
		fireEvent.click(button);

		expect(mockAddToCart).toHaveBeenCalledTimes(1);
		expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
	});
});
