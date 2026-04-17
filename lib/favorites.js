export function getFavorites() {
  if (typeof window === "undefined") return [];
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function isFavorite(movieId) {
  const favorites = getFavorites();
  return favorites.some((movie) => movie.id === movieId);
}

export function addFavorite(movie) {
  const favorites = getFavorites();

  const exists = favorites.some((item) => item.id === movie.id);
  if (exists) return favorites;

  const updatedFavorites = [...favorites, movie];
  saveFavorites(updatedFavorites);
  return updatedFavorites;
}

export function removeFavorite(movieId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  saveFavorites(updatedFavorites);
  return updatedFavorites;
}