// src/app/page.tsx
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import Hero from "./Hero";

export default function Home() {
  return (
    <PageBackground>
      <Navbar />
      <Hero />
      <Footer />
    </PageBackground>
  );
}
