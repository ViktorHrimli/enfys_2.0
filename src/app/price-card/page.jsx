import Hero from "@/libs/components/hero/Hero";
import AboutCards from "@/libs/pages/components/about-cards-gallary/about-cards-gallary";
import Card from "@/libs/pages/components/card/card";

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCards />
      <Card />
    </>
  );
}
