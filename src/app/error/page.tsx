// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import NotFound from "./Error";

export default function ErrorPage() {
  return (
    <PageBackground>
      <Navbar />
      <NotFound />
    </PageBackground>
  );
}
