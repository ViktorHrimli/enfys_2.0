import AboutCardsGallery from "@/libs/pages/components/about-cards-gallary/about-cards-gallary";
import AboutCards from "@/libs/pages/components/about-cards/about-cards";
import Advantages from "@/libs/pages/components/advantages/advantages";
import Card from "@/libs/pages/components/card-about-colors/card";
import Conditions from "@/libs/pages/components/conditions/conditions";
import HeroCards from "@/libs/pages/components/hero-cards/hero-cards";
import TableCards from "@/libs/pages/components/table-cards/table-cards";

export default async function PageCard(id) {
  var { data } = await (await fetch('https://www.admin-enfys.space/api/tests?populate=*', { cache: 'no-cache' })).json();
  var { data: { attributes: { dollar } } } = await (await fetch('https://www.admin-enfys.space/api/course', { cache: 'no-cache' })).json();
  var selectedCategory = 'КОЛЯСКИ ДЛЯ ДВІЙНІ';

  return (
    <>
      <HeroCards selectedCategory={selectedCategory} />
      <AboutCardsGallery data={data} id={id} dollar={dollar} />
      <Conditions />
      <AboutCards data={data} id={id} dollar={dollar} />
      {/* <Advantages /> */}
      <TableCards data={data} id={id} />
      <Card />
    </>
  );
}
