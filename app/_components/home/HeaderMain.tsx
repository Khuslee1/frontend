import { Button } from "@/components/ui/button";
import { MapPin, ShoppingCart, User, X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Address } from "./Address";

export const HeaderMain = () => {
  return (
    <div className="w-screen h-17 bg-[#18181B] flex px-22 items-center justify-between fixed top-0 right-0 left-0 z-2">
      <div className="flex gap-3">
        <img src="./logo.png" height={"37px"} width={"46px"} />{" "}
        <div>
          <h1 className="font-semibold text-5 text-white">
            Nom<span className="text-[#EF4444]">Nom</span>
          </h1>
          <p className="text-[12px] text-white">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Dialog>
          <DialogTrigger>
            <Button variant={"secondary"} className=" bg-white rounded-full">
              <MapPin className="text-[#EF4444]" />
              <p className="text-[#EF4444]">
                Delivery address:{" "}
                <span className="text-[#71717A]">Add Location</span>
              </p>
              <ChevronRight className="text-[#71717A]" />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-106.25 flex flex-col gap-8"
            showCloseButton={false}
          >
            <DialogHeader>
              <DialogClose>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full absolute right-6"
                >
                  {" "}
                  <X className="text-black" />
                </Button>
              </DialogClose>
              <DialogTitle>Please write your delivery address!</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Input
                  placeholder="Please share your complete address"
                  className="h-20"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Deliver Here</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* 
          <Address />
        */}
        <Drawer direction="right">
          <DrawerTrigger>
            <Button
              size="icon"
              variant={"secondary"}
              className=" bg-white rounded-full text-black"
            >
              <ShoppingCart />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="rounded-4xl bg-[#404040]">
            <DrawerHeader>
              <DrawerTitle className="flex text-white">
                <ShoppingCart className="text-white" />
                Order detail
                <DrawerClose>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full absolute right-6"
                  >
                    {" "}
                    <X className="text-black" />
                  </Button>
                </DrawerClose>
              </DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Button
          size="icon"
          variant={"destructive"}
          className=" bg-[#EF4444] rounded-full"
        >
          <User />
        </Button>
      </div>
    </div>
  );
};
