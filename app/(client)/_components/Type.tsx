"use client";

import { useState } from "react";
import { FoodCart, Props } from "./FoodCart";
import { useCart } from "../context/cart-context";

export const Type = () => {
  const cata: string[] = ["Appetizers", "Salads", "Lunch favorites"];
  const Arr = [1, 2, 3, 4, 5, 6];
  const [Carted, setCarted] = useState<Props[]>([]);
  const {
    cartItems,
    addToCart,
    removeCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  return (
    <>
      {cata.map((ele, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-10 items-center bg-[#404040] pt-12 pb-10"
          >
            <h1 className="w-316 text-[30px] text-white font-semibold">
              {ele}
            </h1>
            <div className="flex flex-wrap h-180 w-316 gap-9">
              {Arr.map((num, index) => {
                return <FoodCart key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
