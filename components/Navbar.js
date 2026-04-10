import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <h2>MovieFinder</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link
          href="/favorites"
          style={{ color: "white", textDecoration: "none" }}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}