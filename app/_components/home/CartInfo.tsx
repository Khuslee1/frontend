import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodInfo } from "./FoodInfo";
import { Textarea } from "@/components/ui/textarea";
import { HistoryFood } from "./HistoryFood";
import { HistoryCard } from "./HistoryCard";
export type foodType = {
  id: number;
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
  const orderInfo: orderType = {
    food: [
      {
        id: 12,
        name: "Sunshine Stackers",
        overview:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        quantity: 1,
        price: 12.99,
      },
      {
        id: 13,
        name: "Sunshine Stackers",
        overview:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        quantity: 1,
        price: 12.99,
      },
    ],
    location: "mangasiin amnii zuun tald bubuchin podwol",
  };
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
                <FoodInfo orderInfo={orderInfo} />
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
                  Items<span className="font-bold text-black">price$</span>
                </p>
                <p className="w-full text-4 text-[#71717A] flex justify-between mb-4">
                  Shipping<span className="font-bold  text-black">price$</span>
                </p>
                <p className="w-full text-4 text-[#71717A] flex justify-between pt-4 border-t-2 border-dashed border-t-[71717A]">
                  Total<span className="font-bold  text-black">price$</span>
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
