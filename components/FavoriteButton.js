"use client";

import { useEffect, useState } from "react";
import { addFavorite, isFavorite, removeFavorite } from "@/lib/favorites";

export default function FavoriteButton({ movie }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.id));
  }, [movie.id]);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        width: "100%",
        padding: "0.8rem 1rem",
        cursor: "pointer",
        border: favorite
          ? "1px solid rgba(229,9,20,0.35)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "999px",
        backgroundColor: favorite ? "#e50914" : "rgba(255,255,255,0.06)",
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.92rem",
      }}
    >
      {favorite ? "Remove Favorite" : "Add to Favorites"}
    </button>
  );
}