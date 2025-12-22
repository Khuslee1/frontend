"use client";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const formSchema = z.object({
  username: z.string(),
});

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" className="bg-red-500 rounded-full">
              <Plus className="text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md gap-10" showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Add new category</DialogTitle>
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type category name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-end">
                  <Button type="submit">Add category</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
