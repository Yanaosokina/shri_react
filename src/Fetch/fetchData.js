
export async function fetchCinemas() {
  const response = await fetch('http://localhost:3001/api/cinemas');
  const cinemas = await response.json();
  return cinemas;
}

export async function fetchMovies() {
  const response = await fetch('http://localhost:3001/api/movies');
  const movies = await response.json();
  return movies;
}

export async function fetchReview() {
  const response = await fetch('http://localhost:3001/api/reviews');
  const reviews = await response.json();
  return reviews;
}
