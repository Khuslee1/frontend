import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodInfo } from "./FoodInfo";
import { Textarea } from "@/components/ui/textarea";

import { HistoryCard } from "./HistoryCard";
import { useEffect, useState } from "react";
export type foodType = {
  id: number;
  type: string;
  name: string;
  overview: string;
  quantity: number;
  price: number;
};
export type orderType = {
  food: foodType[];
  location: string;
};
export const CartInfo = () => {
  const [deleteId, setDeleteid] = useState<number>(0);
  const [orderInfo, setOrder] = useState<orderType>({
    food: [
      {
        id: 1,
        type: "Appetizers",
        name: "Sunshine Stackers",
        overview:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        quantity: 1,
        price: 12.99,
      },
      {
        id: 2,
        name: "Sunshine Stackers",
        type: "Appetizers",
        overview:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        quantity: 1,
        price: 12.99,
      },
      {
        id: 3,
        type: "Appetizers",
        name: "Sunshine Stackers",
        overview:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        quantity: 1,
        price: 12.99,
      },
      // {
      //   id: 4,
      //   name: "Sunshine Stackers",
      //   type: "Appetizers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 5,
      //   type: "Appetizers",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 6,
      //   name: "Sunshine Stackers",
      //   type: "Appetizers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 1,
      //   type: "Salads",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 2,
      //   type: "Salads",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 3,
      //   type: "Salads",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 4,
      //   type: "Salads",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 5,
      //   type: "Salads",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 6,
      //   type: "Salads",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 1,
      //   type: "Lunch favorites",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 2,
      //   type: "Lunch favorites",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 3,
      //   type: "Lunch favorites",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 4,
      //   type: "Lunch favorites",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 5,
      //   type: "Lunch favorites",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
      // {
      //   id: 6,
      //   type: "Lunch favorites",
      //   name: "Sunshine Stackers",
      //   overview:
      //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      //   quantity: 1,
      //   price: 12.99,
      // },
    ],
    location: "mangasiin amnii zuun tald bubuchin podwol",
  });
  //   useEffect(()=> {
  //     setOrder((prev)=>{...prev, orderInfo.food.filter})
  //   },
  // [deleteId])
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="cart" className=" flex flex-col gap-6">
        <TabsList className="w-full rounded-full h-11">
          <TabsTrigger
            value="cart"
            className="rounded-full data-[state=active]:bg-red-500 data-[state=active]:text-white text-[18px]"
          >
            Cart
          </TabsTrigger>
          <TabsTrigger
            value="order"
            className="rounded-full data-[state=active]:bg-red-500 data-[state=active]:text-white text-[18px]"
          >
            Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cart" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-[20px] text-[#71717A]">
                My cart
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex flex-col gap-5">
                <div className="max-h-67.5 overflow-auto flex flex-col gap-5">
                  {" "}
                  <FoodInfo orderInfo={orderInfo} setDeleteid={setDeleteid} />
                </div>

                <div className="mt-5">
                  <h1 className="text-[#71717A] text-5 font-semibold">
                    Delivary location
                  </h1>
                  <Textarea
                    placeholder="Please share your complete address"
                    className="mt-2 h-20"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-[20px] text-[#71717A]">
                Payment info
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <p className="w-full text-4 text-[#71717A] flex justify-between mb-1">
                  Items
                  <span className="font-bold text-black">
                    ${orderInfo.food.reduce((sum, ele) => sum + ele.price, 0)}
                  </span>
                </p>
                <p className="w-full text-4 text-[#71717A] flex justify-between mb-4">
                  Shipping<span className="font-bold  text-black">{0.99}$</span>
                </p>
                <p className="w-full text-4 text-[#71717A] flex justify-between pt-4 border-t-2 border-dashed border-t-[71717A]">
                  Total
                  <span className="font-bold  text-black">
                    $
                    {orderInfo.food.reduce((sum, ele) => sum + ele.price, 0) +
                      0.99}
                  </span>
                </p>
                <Button className="w-full h-11 bg-red-500 text-white rounded-full mt-4">
                  Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="order" className="w-full max-h-full ">
          <HistoryCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};
