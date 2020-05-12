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

export async function getVideoId(type, movieId) {
  const { data } = await axios.get(
    `${apiEndPoint}/${type}/${movieId}/videos?api_key=${apiKey}&language=en-US&page=1`
  );
  return data;
}

export async function getMovieContents(id, type) {
  const { data } = await axios.get(
    `${apiEndPoint}/${type}/${id}?api_key=${apiKey}&language=en-US`
  );
  return data;
}

export async function getCredits(id, type) {
  const { data } = await axios.get(
    `${apiEndPoint}/${type}/${id}/credits?api_key=${apiKey}`
  );
  return data;
}

export async function getRecommendations(id, type) {
  const { data } = await axios.get(
    `${apiEndPoint}/${type}/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
  );
  return data;
}
