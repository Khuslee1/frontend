"use client";

import { FoodCart } from "./FoodCart";

export const Type = () => {
  const cata: string[] = ["Appetizers", "Salads", "Lunch favorites"];
  const Arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {cata.map((ele) => {
        return (
          <div className="flex flex-col gap-10 items-center bg-[#404040] py-12">
            <h1 className="w-316 text-[30px] text-white font-semibold">
              {ele}
            </h1>
            <div className="flex flex-wrap h-180 w-316 gap-9">
              {Arr.map(() => {
                return <FoodCart />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
