import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Cart } from "./Cart";
import { FoodInfo } from "@/app/(client)/_components/FoodInfo";
export type foodInfo = {
  foodName: string;
  price: string;
  foodId: number;
  overview: string;
  img: string;
};
export type foodArr = {
  name: string;
  id: number;
  food: foodInfo[];
};
export type propsType = {
  ell: foodInfo;
};

export const CataAdd = () => {
  const mapData: foodArr[] = [
    {
      name: "Appedizer",
      id: 1,
      food: [
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 1,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 2,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 3,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 4,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 5,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 6,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
      ],
    },
    {
      name: "Appedizer",
      id: 2,
      food: [
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 1,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 2,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 3,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 4,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 5,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 6,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
      ],
    },
    {
      name: "Appedizer",
      id: 3,
      food: [
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 1,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 2,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 3,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 4,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 5,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 6,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
      ],
    },
    {
      name: "Appedizer",
      id: 4,
      food: [
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 1,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 2,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 3,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 4,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 5,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
        {
          foodName: "Brie Crostini Appetizer",
          price: "$12.99",
          foodId: 6,
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
          img: "./BG.png",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-full">
      {mapData.map((ele) => {
        return (
          <div key={ele.id} className="w-full flex flex-col gap-4 bg-white p-5">
            <h1>{ele.name}</h1>
            <div className="w-full flex gap-4 flex-wrap">
              <div className="h-60.25 w-[19%] border border-[#EF4444] border-dashed flex items-center justify-center gap-6 flex-col rounded-xl">
                <Button size="icon" className="rounded-full bg-red-500">
                  {" "}
                  <Plus />
                </Button>
                <p>Add new Dish to {ele.name}</p>
              </div>
              {ele.food.map((ell) => {
                return (
                  <div key={ell.foodId + ele.id} className="h-60.25 w-[19%]">
                    <Cart ell={ell} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
