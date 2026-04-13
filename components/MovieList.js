import MovieCard from "./MovieCard";

export default function MovieList({ movies, loading, hasSearched }) {
  if (loading) {
    return null;
  }

  const sectionTitle = hasSearched ? "Search Results" : "Popular Movies";

  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        {sectionTitle}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}