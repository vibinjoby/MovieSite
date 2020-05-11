import axios from "axios";

const apiEndPoint = process.env.REACT_APP_ENV_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export async function getMovies(type) {
  const { data } = await axios.get(
    `${apiEndPoint}/movie/${type}?api_key=${apiKey}&language=en-US&page=1`
  );
  return data;
}

export async function getTvShows(type) {
  const { data } = await axios.get(
    `${apiEndPoint}/tv/${type}?api_key=${apiKey}&language=en-US&page=1`
  );
  return data;
}

export default {
  getTvShows,
  getMovies
};
