"use client";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

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
import { dataTypeMap } from "./CataAdd";
import { foodArr } from "./CataAdd";
const formSchema = z.object({
  username: z.string(),
});
export type dataTypeMapToggle = {
  mapData: foodArr[];
  setMap: Dispatch<SetStateAction<foodArr[]>>;
  setAllstate: Dispatch<SetStateAction<boolean>>;
  allState: boolean;
};
export const ToggleCata = ({
  mapData,
  setMap,
  setAllstate,
  allState,
}: dataTypeMapToggle) => {
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
        <Button
          variant="outline"
          className={`rounded-full ${allState ? "border-red-500" : ""}`}
          onClick={() => {
            setAllstate(!allState);
            setMap((prev) => prev.map((item) => ({ ...item, state: false })));
          }}
        >
          All Dishes
          <p className="flex items-center bg-black text-white rounded-full px-2  ">
            {mapData.reduce((sum, ele) => sum + ele.food.length, 0)}
          </p>
        </Button>
        {mapData.map((ele, i) => {
          return (
            <Button
              key={i}
              variant="outline"
              className={`rounded-full ${ele.state ? "border-red-500" : ""}`}
              onClick={() => {
                setMap((prev) =>
                  prev.map((item, idx) =>
                    idx === i ? { ...item, state: !item.state } : item
                  )
                );
                setAllstate(false);
              }}
            >
              {ele.name}
              <p className="flex items-center bg-black text-white rounded-full px-2  ">
                {ele.food.length}
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
