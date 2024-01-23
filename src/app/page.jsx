

import Hero from "@/libs/components/hero/Hero";
import NewDevelopment from '@/libs/components/newDevelopment/newDevelopment'
import About from "@/libs/components/about/about";
import Description from "@/libs/components/description/description";
import Contacts from "@/libs/components/section-contacts/section-contacts";


export default async function Home() {
  return (
    <>
      <Hero />
      <NewDevelopment />
      <About />
      <Description />
      <Contacts />
    </>
  );
}
