import HeroCards from "@/libs/pages/components/hero-cards/hero-cards";
import Pay from "@/libs/pages/components/pay/pay";

export default async function PagePrice() {
  var selectedCategory = 'оформлення замовлення';

  return (
    <>
      <HeroCards selectedCategory={selectedCategory} />
      <Pay />
    </>
  );
}
