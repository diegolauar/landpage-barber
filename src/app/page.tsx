import { Hero } from "@/components/Hero/Hero";
import { TrustBar } from "@/components/TrustBar/TrustBar";
import { About } from "@/components/About/About";
import { Services } from "@/components/Services/Services";
import { Experience } from "@/components/Experience/Experience";
import { Gallery } from "@/components/Gallery/Gallery";
import { Barbers } from "@/components/Barbers/Barbers";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { FAQ } from "@/components/FAQ/FAQ";
import { Location } from "@/components/Location/Location";
import { CTA } from "@/components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Experience />
      <Gallery />
      <Barbers />
      <Testimonials />
      <FAQ />
      <Location />
      <CTA />
    </>
  );
}
