"use client";

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <section style={{ padding: "1rem 2rem", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          padding: "0.75rem",
          width: "260px",
          marginRight: "0.5rem",
        }}
      />
      <button
        onClick={onSearch}
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