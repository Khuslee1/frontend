import { Footer } from "../_components/home/Footer";
import { HeaderMain } from "../_components/home/HeaderMain";
import { TypeCata } from "../_components/home/TypeCata";

export default function Home() {
  return (
    <div className="w-screen">
      <HeaderMain />
      <TypeCata />
      <Footer />
    </div>
  );
}
