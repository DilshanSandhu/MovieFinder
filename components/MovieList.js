import MovieCard from "./MovieCard";

export default function MovieList({ movies, loading, hasSearched }) {
  if (loading) {
    return null;
  }

  const sectionTitle = hasSearched ? "Search Results" : "Popular Movies";

  return (
    <section style={{ paddingBottom: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
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
            Discover
          </p>
          <h2
            style={{
              margin: "0.35rem 0 0",
              fontSize: "2rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            {sectionTitle}
          </h2>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}