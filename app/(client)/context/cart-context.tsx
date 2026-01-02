"use client";
import { ReactNode, useContext, useState } from "react";
import { foodType } from "../_components/CartInfo";
import { createContext } from "react";

interface CartContextType {
  cartItems: foodType[];
  addToCart: (item: foodType) => void;
  removeCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => void;
  getTotalPrice: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartitems] = useState<foodType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const addToCart = (item: foodType) => {
    setCartitems((prev) => {
      const exists = prev.find((ele) => ele.id === item.id);
      if (exists) {
        return prev.map((ele) =>
          ele.id === item.id ? { ...ele, quantity: ele.quantity + 1 } : ele
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const removeCart = (id: number) => {
    setCartitems((prev) => prev.filter((ele) => ele.id !== id));
  };
  const updateQuantity = (id: number, quantity: number) => {
    setCartitems((prev) =>
      prev.map((ele) => (ele.id == id ? { ...ele, quantity: quantity } : ele))
    );
  };
  const getTotalItems = () => {
    cartItems.reduce((sum, ele) => sum + ele.quantity, 0);
  };
  const getTotalPrice = () => {
    cartItems.reduce((sum, ele) => sum + ele.price * ele.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
