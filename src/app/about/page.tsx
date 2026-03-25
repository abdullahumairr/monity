import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import HeroAbout from "./hero";
import StatsSection from "./StatsSection";

export default function AboutPage() {
  return (
    <PageBackground>
      <Navbar />
      <HeroAbout />
      <StatsSection />
      <Footer />
    </PageBackground>
  );
}
