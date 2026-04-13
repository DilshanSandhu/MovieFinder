import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>}>
        <HomeClient />
      </Suspense>
      <Footer />
    </main>
  );
}