import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>MovieFinder</h1>
        <p>Search for your favourite movies and view details.</p>
      </section>

      <SearchBar />
      <MovieList />

      <Footer />
    </main>
  );
}