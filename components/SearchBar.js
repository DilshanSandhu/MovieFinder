"use client";

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "0.75rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          flex: "1 1 320px",
          minWidth: "240px",
          padding: "0.95rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.12)",
          backgroundColor: "rgba(255,255,255,0.08)",
          color: "#fff",
          outline: "none",
          fontSize: "0.95rem",
        }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: "0.95rem 1.4rem",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#e50914",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.95rem",
          boxShadow: "0 10px 25px rgba(229, 9, 20, 0.25)",
        }}
      >
        Search
      </button>
    </div>
  );
}