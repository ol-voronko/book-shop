import { createContext, useContext } from "react";

export const BookContext = createContext(null);
export const BookProvider = BookContext.Provider;
export const useBook = () => useContext(BookContext);