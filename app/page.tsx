import { Type } from "./_components/home/Type";
import { HeaderMain } from "./_components/home/HeaderMain";

export default function Home() {
  return (
    <div className="w-screen">
      <HeaderMain />
      <img src="./BG.png" className="w-full h-[40%]" />
      <Type />
    </div>
  );
}
