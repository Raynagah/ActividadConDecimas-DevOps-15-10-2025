import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main page title", () => {
	render(<App />);
  
	// Buscamos un texto que sabemos que está en la aplicación
	const titleElement = screen.getByText(/Mi Tienda/i);
  
	// Verificamos que el elemento exista en el documento
	expect(titleElement).toBeInTheDocument();
});