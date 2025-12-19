"use client";

import { FoodCart } from "./FoodCart";

export const TypeCata = () => {
  const cata: string[] = ["Appetizers"];
  const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="flex flex-col gap-10 items-center bg-[#404040] pt-22 pb-10">
        <h1 className="w-316 text-[30px] text-white font-semibold">{cata}</h1>
        <div className="flex flex-wrap w-316 gap-9">
          {Arr.map((ele, index) => {
            return <FoodCart key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
