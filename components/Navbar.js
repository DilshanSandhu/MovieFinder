"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/favorites";

export default function Navbar() {
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateFavoritesCount = () => {
      setFavoriteCount(getFavorites().length);
    };

    updateFavoritesCount();
    window.addEventListener("favoritesUpdated", updateFavoritesCount);

    return () => {
      window.removeEventListener("favoritesUpdated", updateFavoritesCount);
    };
  }, []);

  const linkStyle = {
    color: "#f5f5f5",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "rgba(7, 7, 7, 0.9)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#ffffff",
          fontSize: "1.6rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        <span style={{ color: "#e50914" }}>Movie</span>Finder
      </Link>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link href="/" style={linkStyle}>
          Home
        </Link>

        <Link href="/favorites" style={linkStyle}>
          Favorites
          <span
            style={{
              marginLeft: "0.45rem",
              backgroundColor: "#e50914",
              color: "#fff",
              padding: "0.15rem 0.45rem",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            {favoriteCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}