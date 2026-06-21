import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
