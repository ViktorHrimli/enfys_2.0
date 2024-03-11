import Hero from "@/libs/components/hero/Hero";
import Contacts from "@/libs/components/section-contacts/section-contacts";
import AboutStore from "@/libs/pages/components/about-store/about-store";


export default async function Home() {
  return (
    <>
      <Hero />
      <AboutStore />
      <Contacts />
    </>
  );
}
