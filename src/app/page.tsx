// src/app/page.tsx
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import Hero from "./Hero";
import WhySection from "./WhySection";
import MonitorSection from "./MonitorSection";
import OptimizeSection from "./OptimizeSection";
import FeatureSection from "./FeatureSection";
import ReadyFooter from "@/components/layout/ReadyFooter";

export default function Home() {
  return (
    <PageBackground>
      <Navbar />
      <Hero />
      <WhySection />
      <MonitorSection />
      <OptimizeSection />
      <FeatureSection />
      <ReadyFooter />
      <Footer />
    </PageBackground>
  );
}
