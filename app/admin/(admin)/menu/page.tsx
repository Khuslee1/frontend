import { CataAdd } from "../_components/CataAdd";
import { Profile } from "../_components/Profile";
import { ToggleCata } from "../_components/ToggleCata";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 bg-[#E4E4E7]">
      <Profile />
      <div className="w-full flex flex-col gap-10 p-10">
        <ToggleCata />
        <CataAdd />
      </div>
    </div>
  );
}
