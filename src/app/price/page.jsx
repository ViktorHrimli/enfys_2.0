import Hero from "@/libs/components/hero/Hero";
import PriceList from "@/libs/pages/components/price-list/price-list";

export default async function PagePrice() {
  var { data } = await (await fetch('https://www.admin-enfys.space/api/tests?populate=*', {cache: 'no-cache'})).json()

  return (
    <>
    <Hero />
      <PriceList data={data}/>
    </>
  );
}
