import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import SolutionAutomationSection from "./SolutionAutomationSection";

export default function SolutionsPage() {
  return (
    <PageBackground>
      <Navbar />
      <SolutionAutomationSection />
      <Footer />
    </PageBackground>
  );
}
