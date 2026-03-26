import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import SolutionAutomationSection from "./SolutionAutomationSection";
import SolutionVisualizationSection from "./SolutionVisualizationSection";
import SolutionsHero from "./hero";
import SolutionForecastSection from "./SolutionForecastSection";

export default function SolutionsPage() {
  return (
    <PageBackground>
      <Navbar />
      <SolutionsHero />
      <SolutionAutomationSection />
      <SolutionVisualizationSection />
      <SolutionForecastSection />
      <Footer />
    </PageBackground>
  );
}
