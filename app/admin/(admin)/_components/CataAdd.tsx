"use client";
import { Button } from "@/components/ui/button";
import { Image, Plus, X } from "lucide-react";
import { Cart } from "./Cart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  foodName: z.string(),
  foodPrice: z.string(),
  ingre: z.string(),
  image: z.file(),
});
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
  const [preview, setPreview] = useState<string>("");
  const removeImg = () => {
    setPreview("");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      foodPrice: "",
      ingre: "",
      image: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex flex-col gap-5 w-full">
      {mapData.map((ele) => {
        return (
          <div key={ele.id} className="w-full flex flex-col gap-4 bg-white p-5">
            <h1>{ele.name}</h1>
            <div className="w-full flex gap-4 flex-wrap">
              <div className="h-60.25 w-[19%] border border-[#EF4444] border-dashed flex items-center justify-center gap-6 flex-col rounded-xl">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="icon" className="rounded-full bg-red-500">
                      {" "}
                      <Plus />
                    </Button>
                  </DialogTrigger>
                  <p>Add new Dish to {ele.name}</p>
                  <DialogContent showCloseButton={false} className="w-115">
                    <DialogTitle hidden></DialogTitle>
                    <DialogHeader className="font-semibold text-[18px]">
                      Add new Dish to Appetizers
                    </DialogHeader>
                    <DialogClose asChild>
                      <Button
                        size="icon"
                        variant={"outline"}
                        className="absolute rounded-full right-4 top-4"
                      >
                        <X />
                      </Button>
                    </DialogClose>
                    <div>
                      {" "}
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-8"
                        >
                          <div className="w-full flex justify-between">
                            {" "}
                            <FormField
                              control={form.control}
                              name="foodName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Food name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Type food name"
                                      {...field}
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="foodPrice"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Food price</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter price..."
                                      {...field}
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="ingre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ingredients</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="List ingredients..."
                                    className="h-22.5"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Food image</FormLabel>
                                <FormControl>
                                  <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      field.onChange(file);
                                      if (file) {
                                        setPreview(URL.createObjectURL(file));
                                      }
                                    }}
                                    className="h-22.5 z-1 opacity-0"
                                  />
                                </FormControl>
                                <FormMessage />

                                <div className="mt-2 absolute w-[90%] rounded-md h-22.5 bottom-23 flex flex-col justify-center gap-2 items-center bg-[#d5dff5] border border-dashed border-[#2563EB] ">
                                  {preview ? (
                                    <>
                                      <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-full h-22.5 object-cover rounded-md"
                                      />
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full absolute right-2 top-2 z-2"
                                        onClick={() => removeImg()}
                                      >
                                        <X />
                                      </Button>
                                    </>
                                  ) : (
                                    <>
                                      {" "}
                                      <div className="h-8 w-8 flex justify-center items-center bg-white rounded-full">
                                        <Image className="h-4 w-4" />
                                      </div>
                                      <p>
                                        Choose a file or drag & drop it here
                                      </p>
                                    </>
                                  )}
                                </div>
                              </FormItem>
                            )}
                          />
                          <div className="flex w-full justify-end">
                            <Button type="submit">Submit</Button>
                          </div>
                        </form>
                      </Form>
                    </div>
                  </DialogContent>
                </Dialog>
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
