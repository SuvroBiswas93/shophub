import Categories from "@/components/categories";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Image from "next/image";
import FAQ from "@/components/faq";


export default function Home() {
  return (
  <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Features />
        <Categories />
        <Testimonials />
        <FAQ />
        <CTA />
        <Newsletter />
      </main>

      <Footer />
  </div>
  );
}
