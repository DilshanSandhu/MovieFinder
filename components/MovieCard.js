import Link from "next/link";

export default function MovieCard({ movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={poster}
        alt={movie.title}
        style={{
          width: "100%",
          borderRadius: "6px",
          height: "280px",
          objectFit: "cover",
        }}
      />
      <h3>{movie.title}</h3>
      <p>Release Year: {movie.release_date?.slice(0, 4) || "N/A"}</p>

      <Link
        href={`/movie/${movie.id}`}
        style={{
          display: "inline-block",
          marginTop: "0.75rem",
          textDecoration: "none",
        }}
      >
        View Details
      </Link>
    </div>
  );
}