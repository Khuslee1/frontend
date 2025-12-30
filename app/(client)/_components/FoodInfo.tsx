"use client";
import { Button } from "@/components/ui/button";
import { orderType } from "./CartInfo";
import { Minus, Plus, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
type objOr = {
  orderInfo: orderType;
  setDeleteid: Dispatch<SetStateAction<number>>;
};

export const FoodInfo = ({ orderInfo, setDeleteid }: objOr) => {
  const [quantity, setQuantity] = useState<number[]>([1, 1, 1]);
  return orderInfo.food.map((ele, i) => {
    return (
      <div key={i} className="flex gap-2.5 w-full">
        <img src="./BG.png" className="h-30 w-30" />
        <div className="flex flex-col justify-between h-full">
          <div className="flex">
            <h1 className="flex flex-col text-[#EF4444] text-4 font-bold">
              {ele.name}
              <span className="text-black text-[12px] font-normal">
                {ele.overview}
              </span>
            </h1>
            <Button
              size="icon"
              className="rounded-full border-red-500"
              variant={"outline"}
              onClick={() => {
                setDeleteid(i);
              }}
            >
              <X className="text-red-500" />
            </Button>
          </div>
          <div className="flex justify-between w-full">
            {" "}
            <div className="flex gap-3 items-center">
              <Button
                size="icon"
                variant={"outline"}
                disabled={quantity[i] == 1}
                className="rounded-full"
                onClick={() => {
                  setQuantity((prev) =>
                    prev.map((q, index) => (index === i ? q - 1 : q))
                  );
                }}
              >
                <Minus />
              </Button>
              <p>{quantity[i]}</p>
              <Button
                size="icon"
                variant={"outline"}
                className="rounded-full"
                onClick={() => {
                  setQuantity((prev) =>
                    prev.map((q, index) => (index === i ? q + 1 : q))
                  );
                }}
              >
                <Plus />
              </Button>
            </div>
            <h1>{ele.price * quantity[i]}$</h1>
          </div>
        </div>
      </div>
    );
  });
};
