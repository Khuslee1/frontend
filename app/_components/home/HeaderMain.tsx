import { Button } from "@/components/ui/button";
import { MapPin, ShoppingCart, User } from "lucide-react";
import { ChevronRight } from "lucide-react";

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
        <Button variant={"secondary"} className=" bg-white rounded-full">
          <MapPin className="text-[#EF4444]" />
          <p className="text-[#EF4444]">
            Delivery address:{" "}
            <span className="text-[#71717A]">Add Location</span>
          </p>
          <ChevronRight className="text-[#71717A]" />
        </Button>
        <Button
          size="icon"
          variant={"secondary"}
          className=" bg-white rounded-full text-black"
        >
          <ShoppingCart />
        </Button>
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
