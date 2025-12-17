import { Type } from "./_components/home/Type";
import { HeaderMain } from "./_components/home/HeaderMain";
import { Footer } from "./_components/home/Footer";

export default function Home() {
  return (
    <div className="w-screen">
      <HeaderMain />
      <img src="./BG.png" className="w-full h-[40%]" />
      <Type />
      <Footer />
    </div>
  );
}
