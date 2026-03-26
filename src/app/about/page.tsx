import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import HeroAbout from "./hero";
import StatsSection from "./StatsSection";
import AboutStorySection from "./AboutStorySection";
import AboutFutureSection from "./AboutFutureSection";
import AboutDemocracySection from "./AboutDemocracySection";

export default function AboutPage() {
  return (
    <PageBackground>
      <Navbar />
      <HeroAbout />
      <StatsSection />
      <AboutStorySection />
      <AboutFutureSection />  
      <AboutDemocracySection />
      <Footer />
    </PageBackground>
  );
}
