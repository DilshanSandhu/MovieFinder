import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function MovieCard({ movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div
      style={{
        backgroundColor: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={poster}
          alt={movie.title}
          style={{
            width: "100%",
            height: "310px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "1rem" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.1rem",
            lineHeight: 1.3,
            minHeight: "2.8rem",
            fontWeight: 700,
          }}
        >
          {movie.title}
        </h3>

        <p
          style={{
            margin: "0.65rem 0 0",
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.92rem",
          }}
        >
          Release Year: {movie.release_date?.slice(0, 4) || "N/A"}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          <Link
            href={`/movie/${movie.id}`}
            style={{
              display: "inline-block",
              textAlign: "center",
              padding: "0.75rem 1rem",
              borderRadius: "999px",
              textDecoration: "none",
              backgroundColor: "#ffffff",
              color: "#111111",
              fontWeight: 700,
            }}
          >
            View Details
          </Link>

          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
}