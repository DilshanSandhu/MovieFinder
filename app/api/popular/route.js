export async function GET() {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "TMDb API key is missing." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    const data = await response.json();
    return Response.json(data);
  } catch {
    return Response.json(
      { error: "Failed to fetch popular movies." },
      { status: 500 }
    );
  }
}