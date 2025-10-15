'use client'
import React,{ createContext, useContext,useState, useEffect } from "react";

// 1️⃣ Crear el contexto
export const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

// 2️⃣ Proveedor global del carrito
export function CarritoProvider({ children }) {
  // Estado inicial: intenta cargar el carrito guardado en localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 3️⃣ Sincronizar con localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 4️⃣ Agregar producto al carrito
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // 5️⃣ Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 6️⃣ Vaciar carrito
  const clearCart = () => setCart([]);

  // 7️⃣ Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 8️⃣ Exponer las funciones y el estado
  return (
    <CarritoContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

