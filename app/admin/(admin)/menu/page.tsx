"use client";
import { useState } from "react";
import { CataAdd, foodArr } from "../_components/CataAdd";
import { Profile } from "../_components/Profile";
import { ToggleCata } from "../_components/ToggleCata";

export default function Home() {
  const [allState, setAllstate] = useState<boolean>(true);
  const [mapData, setMap] = useState<foodArr[]>([
    {
      name: "Appedizer",
      state: false,
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
      name: "Salads",
      state: false,
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
      name: "Pizzas",
      state: false,
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
      name: "Lunch",
      state: false,
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
  ]);
  return (
    <div className="w-full flex flex-col gap-10 bg-[#E4E4E7]">
      <Profile />
      <div className="w-full flex flex-col gap-10 p-10">
        <ToggleCata
          mapData={mapData}
          setMap={setMap}
          setAllstate={setAllstate}
          allState={allState}
        />
        <CataAdd
          mapData={mapData}
          setAllstate={setAllstate}
          allState={allState}
        />
      </div>
    </div>
  );
}

const food = { id: "123", name: "buuz", price: 1000, category: "123id" };
const category = { id: "123id", name: "lunch" };

const categories = [
  { id: "123id", name: "lunch", count: 12 },
  { id: "1d3id", name: "salad" },
  { id: "123id", name: "lunch" },
];

const foods = [
  { id: "123", name: "buuz", price: 1000, category: "123id" },
  { id: "123", name: "buuz", price: 1000, category: "123id" },
  { id: "123", name: "buuz", price: 1000, category: "123id" },
];
