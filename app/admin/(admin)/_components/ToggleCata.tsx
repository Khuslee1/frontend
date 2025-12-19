"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export const ToggleCata = () => {
  const [cataitem, setCataitem] = useState([
    { name: "All Dishes", state: false, quantity: 123 },
    { name: "Appetizers", state: false, quantity: 123 },
    { name: "Salads", state: false, quantity: 123 },
    { name: "Pizzas", state: false, quantity: 123 },
    { name: "Lunch favorites", state: false, quantity: 123 },
    { name: "Main dishes", state: false, quantity: 123 },
    { name: "Fish & Sea foods", state: false, quantity: 123 },
    { name: "Brunch", state: false, quantity: 123 },
    { name: "Side dish", state: false, quantity: 123 },
    { name: "Desserts", state: false, quantity: 123 },
    { name: "Desserts", state: false, quantity: 123 },
  ]);
  return (
    <div className="flex flex-col gap-4 w-full  rounded-xl p-6 bg-white">
      <h1 className="text-[20px] font-semibold">Dishes category</h1>
      <div className="flex items-center gap-2">
        {cataitem.map((ele, i) => {
          return (
            <Button
              key={i}
              variant="outline"
              className={`rounded-full ${ele.state ? "border-red-500" : ""}`}
              onClick={() => {
                setCataitem((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, state: !item.state } : item
                  )
                );
              }}
            >
              {ele.name}
              <p className="flex items-center bg-black text-white rounded-full px-1 py-0.5">
                {ele.quantity}
              </p>
            </Button>
          );
        })}

        <Button size="icon" className="bg-red-500 rounded-full">
          <Plus className="text-white" />
        </Button>
      </div>
    </div>
  );
};
