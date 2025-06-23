import DisplayTable from "@/components/DisplayTable";
import HeroSectionText from "@/components/HeroSectionText";
import SlidingCard from "@/components/SlidingCard";

export default async function Home() {
  return (
    <>
      <HeroSectionText />
      <SlidingCard />
      <DisplayTable />
    </>
  );
}