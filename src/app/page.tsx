// src/app/page.tsx
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import Hero from "./Hero";
import WhySection from "./WhySection";

export default function Home() {
  return (
    <PageBackground>
      <Navbar />
      <Hero />
      <WhySection />
      <Footer />
    </PageBackground>
  );
}
