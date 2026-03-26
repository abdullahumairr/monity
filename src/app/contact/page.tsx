import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import ContactSection from "./ContactSection";

export default function ContactPage() {
  return (
    <PageBackground>
      <Navbar />
      <ContactSection />
      <Footer />
    </PageBackground>
  );
}
