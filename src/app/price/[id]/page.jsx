import Hero from "@/libs/components/hero/Hero";
import AboutCards from "@/libs/pages/components/about-cards-gallary/about-cards-gallary";
import AboutStore from "@/libs/pages/components/about-store/about-store";
import Advantages from "@/libs/pages/components/advantages/advantages";
import Card from "@/libs/pages/components/card/card";
import Conditions from "@/libs/pages/components/conditions/conditions";

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCards />
      <Conditions />
      <AboutStore />
      <Advantages />
      <Card />
    </>
  );
}
