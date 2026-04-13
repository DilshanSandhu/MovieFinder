export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const apiKey = process.env.TMDB_API_KEY;

  if (!query) {
    return Response.json(
      { error: "Search query is required." },
      { status: 400 }
    );
  }

  if (!apiKey) {
    return Response.json(
      { error: "TMDb API key is missing." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    );

    const data = await response.json();
    return Response.json(data);
  } catch {
    return Response.json(
      { error: "Failed to fetch search results." },
      { status: 500 }
    );
  }
}