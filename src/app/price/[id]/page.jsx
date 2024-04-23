import Hero from "@/libs/components/hero/Hero";
import AboutCards from "@/libs/pages/components/about-cards-gallary/about-cards-gallary";
import AboutStore from "@/libs/pages/components/about-store/about-store";
import Advantages from "@/libs/pages/components/advantages/advantages";
import Card from "@/libs/pages/components/card-about-colors/card";
import Conditions from "@/libs/pages/components/conditions/conditions";

export default async function PageCard(id) {
  var { data } = await (await fetch('https://www.admin-enfys.space/api/tests?populate=*', {cache: 'no-cache'})).json()

  return (
    <>
      <Hero />
      <AboutCards data={data} id={id} />
      <Conditions />
      <AboutStore />
      <Advantages />
      <Card />
    </>
  );
}
