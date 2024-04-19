
import Hero from "@/libs/components/hero/Hero";
import About from "@/libs/components/about/about";
import Description from "@/libs/components/description/description";
import Contacts from "@/libs/components/section-contacts/section-contacts";
import Partners from "@/libs/components/partners/partners";
import NewDevelopment from "@/libs/components/new-development/new-development";


export default async function Home() {
  return (
    <>
      <Hero />
      <NewDevelopment />
      <About />
      <Partners />
      <Description />
      <Contacts />
    </>
  );
}
