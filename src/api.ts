const API_KEY = 'bc6e27d4ea1e78e704fee1d9c5ff78d9'
const BASE_PATH = 'https://api.themoviedb.org/3'

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`,
  ).then((response) => response.json())
}
