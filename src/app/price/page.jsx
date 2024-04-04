import Hero from "@/libs/components/hero/Hero";
import Filter from "@/libs/modal/filter/filter";
import PriceList from "@/libs/pages/components/price-list/price-list";

export default async function Home() {
  return (
    <>
    <Hero />
    <PriceList />
    </>
  );
}
