"use client";

import { useEffect, useState } from "react";
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
      router.push("/");
      return;
    }

    router.push(`/?search=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>MovieFinder</h1>
        <p>Search for your favourite movies and view details.</p>
      </section>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />

      <section style={{ padding: "1rem 2rem", textAlign: "center" }}>
        {loading && <p>Loading movies...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && hasSearched && movies.length > 0 && (
          <p>Showing results for "{submittedQuery}"</p>
        )}
        {!loading && !error && hasSearched && movies.length === 0 && (
          <p>No movies found.</p>
        )}
      </section>

      <MovieList movies={movies} loading={loading} hasSearched={hasSearched} />
    </>
  );
}