export default function MovieCard() {
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
        src="https://placeholder.com"
        alt="Movie Poster"
        style={{ width: "100%", borderRadius: "6px" }}
      />
      <h3>Movie Title</h3>
      <p>Release Year: 2025</p>
    </div>
  );
}