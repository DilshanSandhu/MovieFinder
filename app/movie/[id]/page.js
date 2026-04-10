import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MovieDetailsPage({ params }) {
  return (
    <main>
      <Navbar />

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Movie Details Page</h1>
        <p>This page will show details for movie ID: {params.id}</p>
      </section>

      <Footer />
    </main>
  );
}