"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Minus, Plus } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
export type Props = {
  ele: string;
  num: number;
};
export type Propstype = {
  ele: string;
  num: number;
  Carted: Props[];
  setCarted: Dispatch<SetStateAction<Props[]>>;
};

export const FoodCart = (props: Propstype) => {
  const [check, setCheck] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  // const checkCart = (cartData, foodId) => {
  //   const food = cartData.map((el) => el.id == foodId);
  //   return food.length > 0 ? true : false;
  // };

  useEffect(() => {
    localStorage.setItem("Carted", JSON.stringify(props.Carted));
    // const value = localStorage.getItem("Carted");
    // setCarted(JSON.parse(value));
  }, [props.Carted]);

  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger>
          <div>
            <Card className="p-4 w-99.25 h-85.5 gap-1.25">
              <CardHeader className="p-0">
                <img className="w-full h-52.5 rounded-xl" src="./BG.png" />
              </CardHeader>
              <CardFooter className="p-0 flex-col">
                <p className="text-[#EF4444] text-[24px] font-semibold w-full flex justify-between">
                  Finger food{" "}
                  <span className="text-black text-[18px]">$12.99</span>
                </p>
                <p className="text-[14px] text-start">
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </p>
              </CardFooter>
            </Card>
          </div>
        </DialogTrigger>
        <DialogContent className="min-w-206.5" showCloseButton={false}>
          <DialogTitle className="hidden" />
          <DialogHeader className="flex-row gap-6 min-w-200 ">
            <img className="w-[46.7%] h-91" src="./BG.png" />
            <div className="w-[46.7%] h-91 flex flex-col justify-between">
              <div>
                <div className="w-full flex justify-end">
                  <DialogClose asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                    >
                      {" "}
                      <X className="text-black" />
                    </Button>
                  </DialogClose>
                </div>
                <div className="w-full flex justify-end"></div>
                <p className="text-[#EF4444] text-[30px] font-semibold w-full flex justify-between">
                  Finger food
                </p>
                <p className="text-[16px] text-start pt-3">
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-between">
                  <p className="text-4 flex flex-col">
                    Total price
                    <span className="font-semibold text-[24px]">
                      ${12.99 * quantity}
                    </span>
                  </p>
                  <div className="flex gap-3 items-center">
                    <Button
                      size="icon"
                      variant={"outline"}
                      disabled={quantity == 1}
                      className="rounded-full"
                      onClick={() => {
                        setQuantity(quantity - 1);
                      }}
                    >
                      <Minus />
                    </Button>
                    <p>{quantity}</p>
                    <Button
                      size="icon"
                      variant={"outline"}
                      className="rounded-full"
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
                <Button className="rounded-full"> Add to cart</Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        size="icon"
        className={`rounded-full absolute w-11 h-11 bottom-32 right-8 ${
          check ? "bg-white" : "bg-[#18181B]"
        }`}
        onClick={() => {
          setCheck((prev) => !prev);

          props.setCarted((prev) => {
            const exists = prev.some(
              (item) => item.num === props.num && item.ele === props.ele
            );

            if (exists) {
              console.log("filter");

              return prev.filter(
                (item) => item.num !== props.num && item.ele !== props.ele
              );
            } else {
              console.log("add", prev);
              return [...prev, props];
            }
          });
        }}
      >
        {check ? (
          <Plus className="w-4 h-4 text-[#EF4444]" />
        ) : (
          <Check className="w-4 h-4 text-[#E4E4E7]" />
        )}
      </Button>
    </div>
  );
};
