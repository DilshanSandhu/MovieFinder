import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Search Results
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}