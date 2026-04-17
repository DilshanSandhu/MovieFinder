export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "3rem",
        padding: "2.5rem 2rem",
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.6rem",
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#e50914" }}>Join</span> the Movie Circle
        </h3>

        <p
          style={{
            margin: "0.75rem auto 0",
            maxWidth: "520px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
          }}
        >
          Discover popular titles, search for your favourite films, and build your own cinematic favorites list.
        </p>

        <p
          style={{
            marginTop: "2rem",
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.9rem",
          }}
        >
          © 2026 MovieFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}