"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ChevronsUpDown, Minus, Pen, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export const Cart = ({ ell }: propsType) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setImageFile(null);
    setPreview(null);
  };

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
            <div className="flex justify-between w-full">
              <p className="text-[#71717A] text-[12px]">Dish name</p>
              <Input className="w-[60%]" defaultValue={ell.foodName} />
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[#71717A] text-[12px]">Dish cata</p>
              <Select defaultValue={"light"}>
                <SelectTrigger className="w-[60%]">
                  <SelectValue />
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
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[#71717A] text-[12px]">Ingredients</p>
              <Input
                className="w-[60%] h-20"
                type={"text"}
                defaultValue={ell.overview}
              />
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[#71717A] text-[12px]">Price</p>
              <Input className="w-[60%]" defaultValue={ell.price} />
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[#71717A] text-[12px]">Image</p>
              <Input
                className="w-[60%] h-29"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                placeholder="Please choose photo"
              />

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
                    onClick={handleRemove}
                    className="absolute top-1 right-2 rounded-full "
                  >
                    <X />
                  </Button>
                </div>
              )}
            </div>
            <div className="w-full flex justify-between h-16 items-end">
              <Button
                size={"icon"}
                variant={"outline"}
                className="border-red-500"
              >
                {" "}
                <Trash className="text-red-500" />
              </Button>
              <Button>Save changes</Button>
            </div>
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
