import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

async function getMovieDetails(id) {
  const apiKey = process.env.TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
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

  return (
    <main>
      <Navbar />

      <section
        style={{
          padding: "2rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          src={poster}
          alt={movie.title}
          style={{ width: "250px", borderRadius: "8px" }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h1>{movie.title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date || "N/A"}</p>
          <p><strong>Rating:</strong> {movie.vote_average || "N/A"}</p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres?.length
              ? movie.genres.map((genre) => genre.name).join(", ")
              : "N/A"}
          </p>
          <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} min` : "N/A"}</p>
          <p><strong>Overview:</strong> {movie.overview || "No overview available."}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}