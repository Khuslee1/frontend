import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { ChevronRight, MapPin, X } from "lucide-react";

export const Address = () => {
  return (
    <DialogContent className="sm:max-w-106.25 flex flex-col gap-8">
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
  );
};
