// src/app/page.tsx
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import Hero from "./Hero";
import WhySection from "./WhySection";
import MonitorSection from "./MonitorSection";

export default function Home() {
  return (
    <PageBackground>
      <Navbar />
      <Hero />
      <WhySection />
      <MonitorSection />
      <Footer />
    </PageBackground>
  );
}
