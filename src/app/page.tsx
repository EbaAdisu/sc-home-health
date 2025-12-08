import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CarePhilosophy } from "@/components/home/CarePhilosophy";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <CarePhilosophy />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
