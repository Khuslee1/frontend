"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

export const FoodCart = () => {
  const [check, setCheck] = useState<boolean>(true);
  return (
    <Card className="p-4 w-99.25 h-85.5 gap-1.25">
      <CardHeader className="p-0 relative">
        <img className="w-full h-52.5 rounded-xl" src="./BG.png" />
        <Button
          size="icon"
          className={`rounded-full absolute w-11 h-11 bottom-5 right-3 ${
            check ? "bg-white" : "bg-[#18181B]"
          }`}
          onClick={() => {
            setCheck(!check);
          }}
        >
          {check ? (
            <Plus className="w-4 h-4 text-[#EF4444]" />
          ) : (
            <Check className="w-4 h-4 text-[#E4E4E7]" />
          )}
        </Button>
      </CardHeader>
      <CardFooter className="p-0 flex-col">
        <p className="text-[#EF4444] text-[24px] font-semibold w-full flex justify-between">
          Finger food <span className="text-black text-[18px]">$12.99</span>
        </p>
        <p className="text-[14px]">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </CardFooter>
    </Card>
  );
};
