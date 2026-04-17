"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

export default function HomeClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlSearch = searchParams.get("search") || "";

  const [query, setQuery] = useState(urlSearch);
  const [submittedQuery, setSubmittedQuery] = useState(urlSearch);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [hasSearched, setHasSearched] = useState(Boolean(urlSearch));

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    setQuery(currentSearch);
    setSubmittedQuery(currentSearch);
    setHasSearched(Boolean(currentSearch));
  }, [searchParams]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const endpoint = submittedQuery
          ? `/api/search?query=${encodeURIComponent(submittedQuery)}`
          : `/api/popular`;

        const response = await fetch(endpoint);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Something went wrong.");
        }

        setMovies(data.results || []);
      } catch (err) {
        setMovies([]);
        setError(err.message || "Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [submittedQuery]);

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setInputError("Please enter a movie name.");
      return;
    }

    if (trimmedQuery.length < 2) {
      setInputError("Search must be at least 2 characters.");
      return;
    }

    setInputError("");
    router.push(`/?search=${encodeURIComponent(trimmedQuery)}`);
  };

  const featuredMovie = !hasSearched && movies.length > 0 ? movies[0] : null;

  const featuredBackdrop = featuredMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`
    : null;

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "72vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundColor: "#0b0b0b",
          backgroundImage: featuredBackdrop
            ? `linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.68) 40%, rgba(0,0,0,0.75) 100%), linear-gradient(to top, rgba(7,7,7,1) 0%, rgba(7,7,7,0.2) 60%), url(${featuredBackdrop})`
            : "linear-gradient(135deg, #101010 0%, #1a1a1a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "4rem 2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: "650px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                color: "#e50914",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              {hasSearched ? "Search Experience" : "Now Streaming"}
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1,
                margin: 0,
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              {!hasSearched
                ? featuredMovie?.title || "MovieFinder"
                : "Search Results"}
            </h1>

            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.82)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "580px",
              }}
            >
              {!hasSearched
                ? featuredMovie?.overview ||
                  "Search for your favourite movies and view details."
                : "Find the movie you are looking for and explore matching results."}
            </p>

            <div style={{ marginTop: "1rem" }}>
              <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
              />
            </div>

            {inputError && (
              <p style={{ color: "#ff6b6b", margin: 0 }}>{inputError}</p>
            )}

            <div style={{ minHeight: "1.5rem", marginTop: "0.25rem" }}>
              {loading && <p style={{ color: "#d8d8d8", margin: 0 }}>Loading movies...</p>}
              {!loading && error && (
                <p style={{ color: "#ff6b6b", margin: 0 }}>{error}</p>
              )}
              {!loading && !error && hasSearched && movies.length > 0 && (
                <p style={{ color: "#d8d8d8", margin: 0 }}>
                  Showing results for "{submittedQuery}"
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 2rem 0",
        }}
      >
        <MovieList
          movies={movies}
          loading={loading}
          hasSearched={hasSearched}
        />
      </section>
    </>
  );
}