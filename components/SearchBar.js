export default function SearchBar() {
  return (
    <section style={{ padding: "1rem 2rem", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        style={{
          padding: "0.75rem",
          width: "250px",
          marginRight: "0.5rem",
        }}
      />
      <button
        style={{
          padding: "0.75rem 1rem",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </section>
  );
}