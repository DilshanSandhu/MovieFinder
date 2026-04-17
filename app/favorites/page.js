"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { getFavorites } from "@/lib/favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      setFavorites(getFavorites());
    };

    loadFavorites();
    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
    };
  }, []);

  return (
    <main>
      <Navbar />

      <section
        style={{
          padding: "4rem 2rem 2rem",
          background:
            "linear-gradient(to bottom, rgba(229,9,20,0.08), rgba(7,7,7,0))",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              margin: 0,
              color: "#e50914",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 700,
              fontSize: "0.75rem",
            }}
          >
            Collection
          </p>
          <h1
            style={{
              margin: "0.5rem 0 0",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}
          >
            My Favorites
          </h1>
          <p
            style={{
              marginTop: "0.9rem",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "650px",
              lineHeight: 1.7,
            }}
          >
            Your saved movies are stored locally in your browser so you can revisit them any time.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 2rem" }}>
        {favorites.length === 0 ? (
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "18px",
              padding: "2rem",
              textAlign: "center",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            No favorite movies yet.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}