import DisplayTable from "@/components/sections/DisplayTable";
import HeroSectionText from "@/components/sections/HeroSectionText";
import SlidingCard from "@/components/sections/SlidingCard";

export default async function Home() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 pb-8">
        <HeroSectionText />
        <SlidingCard />
        <DisplayTable />
      </div>
    </>
  );
}
