import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FavoritesPage() {
  return (
    <main>
      <Navbar />

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Favorites Page</h1>
        <p>Your saved favourite movies will appear here.</p>
      </section>

      <Footer />
    </main>
  );
}