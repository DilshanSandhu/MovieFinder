import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

async function getMovieDetails(id) {
  const apiKey = process.env.TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`,
    { cache: "no-store" }
  );

  return response.json();
}

export default async function MovieDetailsPage({ params }) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  if (movie.success === false) {
    return (
      <main>
        <Navbar />
        <section style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Movie Not Found</h1>
          <p>{movie.status_message}</p>
        </section>
        <Footer />
      </main>
    );
  }

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/250x350?text=No+Image";

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const trailer =
    movie.videos?.results?.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    ) ||
    movie.videos?.results?.find(
      (video) => video.site === "YouTube" && video.type === "Teaser"
    );

  const trailerUrl = trailer
    ? `https://www.youtube.com/watch?v=${trailer.key}`
    : null;

  return (
    <main>
      <Navbar />

      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          backgroundColor: "#0a0a0a",
          backgroundImage: backdrop
            ? `linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.82) 100%), linear-gradient(to top, rgba(7,7,7,1) 0%, rgba(7,7,7,0.25) 55%), url(${backdrop})`
            : "linear-gradient(135deg, #111111 0%, #1c1c1c 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "4rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <img
            src={poster}
            alt={movie.title}
            style={{
              width: "280px",
              maxWidth: "100%",
              borderRadius: "20px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
            }}
          />

          <div style={{ flex: 1, minWidth: "280px", maxWidth: "700px" }}>
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
              Movie Details
            </p>

            <h1
              style={{
                margin: "0.65rem 0 0",
                fontSize: "clamp(2.3rem, 6vw, 4.5rem)",
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              {movie.title}
            </h1>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginTop: "1rem",
              }}
            >
              <span
                style={{
                  backgroundColor: "#e50914",
                  padding: "0.55rem 0.95rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                }}
              >
                {movie.vote_average ? `⭐ ${movie.vote_average.toFixed(1)}` : "Unrated"}
              </span>

              <span
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  padding: "0.55rem 0.95rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                {movie.release_date || "N/A"}
              </span>

              <span
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  padding: "0.55rem 0.95rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                {movie.runtime ? `${movie.runtime} min` : "Runtime N/A"}
              </span>
            </div>

            {trailerUrl && (
              <div style={{ marginTop: "1.2rem" }}>
                <a
                  href={trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.9rem 1.4rem",
                    borderRadius: "999px",
                    backgroundColor: "#e50914",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    boxShadow: "0 10px 25px rgba(229, 9, 20, 0.25)",
                  }}
                >
                  ▶ Watch Trailer
                </a>
              </div>
            )}

            <p
              style={{
                marginTop: "1.4rem",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              {movie.overview || "No overview available."}
            </p>

            <div
              style={{
                marginTop: "1.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "1rem",
                }}
              >
                <strong style={{ display: "block", marginBottom: "0.4rem" }}>
                  Genres
                </strong>
                <span style={{ color: "rgba(255,255,255,0.72)" }}>
                  {movie.genres?.length
                    ? movie.genres.map((genre) => genre.name).join(", ")
                    : "N/A"}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "1rem",
                }}
              >
                <strong style={{ display: "block", marginBottom: "0.4rem" }}>
                  Popularity
                </strong>
                <span style={{ color: "rgba(255,255,255,0.72)" }}>
                  {movie.popularity ? movie.popularity.toFixed(1) : "N/A"}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "1rem",
                }}
              >
                <strong style={{ display: "block", marginBottom: "0.4rem" }}>
                  Vote Count
                </strong>
                <span style={{ color: "rgba(255,255,255,0.72)" }}>
                  {movie.vote_count || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}