import axios from "axios";

const apiEndPoint = process.env.REACT_APP_ENV_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export default async function getMoviesFrmServer(movie_type) {
  const { data } = await axios.get(
    `${apiEndPoint}/movie/${movie_type}?api_key=${apiKey}&language=en-US&page=1`
  );
  return data;
}
