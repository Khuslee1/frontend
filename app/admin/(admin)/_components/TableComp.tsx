import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronsDown,
  ChevronsUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const information = [
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },

  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
  {
    check: false,
    idNumber: 1,
    customer: "test@gmail.com",
    food: ["lalar", "jinga"],
    date: "2024/13/13",
    total: "123$",
    address:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    state: "pending",
  },
];

export const TableComp = () => {
  return (
    <div className="w-full px-7 rounded-lg">
      <div className="w-full h-19 bg-white rounded-t-lg p-4 flex justify-between">
        <h1 className="text-[20px] font-bold flex flex-col">
          Orders
          <span className="text-[#71717A] text-[12px] font-normal">
            {information.length} items
          </span>
        </h1>
        <div className="flex gap-3">
          <Button className="rounded-full" variant={"outline"}>
            <CalendarDays />
            13 June 2023 - 14 July 2023
          </Button>
          <Button className="rounded-full">Change delivery state</Button>
        </div>
      </div>{" "}
      <Table className="w-full bg-white text-[#71717A] rounded-lg">
        <TableHeader className="w-full bg-[#E4E4E7]">
          <TableRow>
            <TableHead className="w-12">
              <div>
                <Checkbox className="border-[#18181B]" />
              </div>
            </TableHead>
            <TableHead className="w-14 text-[#18181B]">№</TableHead>
            <TableHead className="w-60 text-[#71717A]">Customer</TableHead>
            <TableHead className="w-50 text-[#71717A]">Food</TableHead>
            <TableHead className="w-50 text-[#71717A] flex justify-between items-center">
              Date <ChevronsUpDown className="w-4 h-4" />
            </TableHead>
            <TableHead className="w-50 text-[#71717A]">Total</TableHead>
            <TableHead className="w-200 whitespace-normal text-[#71717A]">
              Delivery Address
            </TableHead>
            <TableHead className="w-50 flex gap-2 items-center">
              Delivery state <ChevronsUpDown className="w-4 h-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {information.map((ele, i) => (
            <TableRow key={i}>
              <TableCell className="w-12">
                <div>
                  {" "}
                  <Checkbox className="border-[#18181B]" />
                </div>
              </TableCell>
              <TableCell className="w-14 text-[#18181B]">
                {ele.idNumber}
              </TableCell>
              <TableCell className="w-50">{ele.customer}</TableCell>
              <TableCell className="w-50   ">
                <div className="justify-between items-center flex">
                  {ele.food.length} foods
                  <span>
                    <ChevronDown className="w-4 h-4" />{" "}
                  </span>
                </div>
              </TableCell>
              <TableCell className="w-50">{ele.date}</TableCell>
              <TableCell className="w-50">{ele.total}</TableCell>

              <TableCell className="w-220 whitespace-normal line-clamp-2">
                {ele.address}
              </TableCell>
              <TableCell className="w-50">
                <Button variant={"outline"} className="rounded-full">
                  {" "}
                  {ele.state}
                  <ChevronsUpDown />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
