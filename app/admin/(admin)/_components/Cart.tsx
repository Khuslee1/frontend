"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Pen, Trash } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { foodArr, propsType } from "./CataAdd";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  dishName: z.string(),
  dishCata: z.string(),
  ingre: z.string(),
  price: z.string(),
  image: z,
});

export const Cart = ({ ell }: propsType) => {
  const [preview, setPreview] = useState<string | null>(`.${ell.img}`);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setPreview(null);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dishName: ell.foodName,
      dishCata: "light",
      ingre: ell.overview,
      price: ell.price,
      image: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="relative ">
      <Dialog>
        <Card className="p-4 w-full h-60.25 gap-1.25">
          <CardHeader className="p-0">
            <img className="w-full h-32.25 rounded-xl" src="../BG.png" />
          </CardHeader>
          <CardFooter className="p-0 flex-col">
            <p className="text-[#EF4444] text-[14px] font-semibold w-full flex justify-between">
              {ell.foodName}{" "}
              <span className="text-black text-[12px]">{ell.price}</span>
            </p>
            <p className="text-[12px] text-start">{ell.overview}</p>
          </CardFooter>
        </Card>

        <DialogContent className="min-w-118" showCloseButton={false}>
          <DialogTitle className="hidden" />
          <DialogHeader className="flex-col gap-3  ">
            <div className="w-full flex justify-between">
              <h1>Dishes info</h1>
              <DialogClose>
                <Button size="icon" variant="outline" className="rounded-full">
                  {" "}
                  <X className="text-black" />
                </Button>
              </DialogClose>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="dishName"
                  render={({ field }) => (
                    <FormItem className="w-full flex justify-between">
                      <FormLabel> Dish name</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[60%]"
                          defaultValue={ell.foodName}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dishCata"
                  render={({ field }) => (
                    <FormItem className="w-full flex justify-between">
                      <FormLabel>Dish category</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[60%]">
                            <SelectValue {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">
                              <p className="rounded-full bg-[#F4F4F5] text-[12px] px-2.5 py-0.5 min-w-29 text-start">
                                Light
                              </p>
                            </SelectItem>
                            <SelectItem value="dark">
                              <p className="rounded-full bg-[#F4F4F5] text-[12px] px-2.5 py-0.5 min-w-29 text-start">
                                Dark
                              </p>
                            </SelectItem>
                            <SelectItem value="system">
                              <p className="rounded-full bg-[#F4F4F5] text-[12px] px-2.5 py-0.5 min-w-29 text-start">
                                System
                              </p>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ingre"
                  render={({ field }) => (
                    <FormItem className="w-full flex justify-between items-start">
                      <FormLabel> Ingredients</FormLabel>
                      <FormControl>
                        <Input className="w-[60%] h-20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="w-full flex justify-between">
                      <FormLabel> Price</FormLabel>
                      <FormControl>
                        <Input className="w-[60%]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="w-full flex justify-between">
                      <FormLabel> Image</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[60%] h-29"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            field.onChange(() => {
                              URL.createObjectURL(file);
                            });
                            handleFileChange(e);
                          }}
                          placeholder="Please choose photo"
                        />
                      </FormControl>
                      {preview && (
                        <div className="absolute w-[55%] h-29 right-5">
                          <img
                            src={preview}
                            alt="preview"
                            className="w-full h-full object-cover rounded-md "
                          />

                          <Button
                            size="icon"
                            variant={"outline"}
                            onClick={() => {
                              handleRemove(), field.onChange(null);
                            }}
                            className="absolute top-1 right-2 rounded-full "
                          >
                            <X />
                          </Button>
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-between h-16 items-end">
                  <Button
                    size={"icon"}
                    type="button"
                    variant={"outline"}
                    className="border-red-500"
                  >
                    {" "}
                    <Trash className="text-red-500" />
                  </Button>
                  <Button type="submit">Save changes</Button>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>

        <DialogTrigger>
          <Button
            size="icon"
            variant={"outline"}
            className={`rounded-full absolute w-11 h-11 bottom-32 right-8 bg-white`}
          >
            <Pen className="text-red-500" />
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};
