import { createContext, useContext } from "react";

export const CartContext = createContext(null);
export const CartProvider = CartContext.Provider;
export const useCart = () => useContext(CartContext);