const API_URL = process.env.TMDB_API_URL;
const API_TOKEN = process.env.TMDB_API_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

interface Props {
  path: string;
  queryString: string;
}

const fetchMovieApi = async ({ path, queryString = '' }: Props) => {
  try {
    const response = await fetch(`${API_URL}${path}?${queryString}`, options);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId: string) => {
  return fetchMovieApi({
    path: '/discover/movie',
    queryString: `with_genres=${genreId}`,
  });
};

const getCategories = async () => {
  return fetchMovieApi({
    path: '/genre/movie/list',
    queryString: `language=en-US&page=1`,
  });
};

const getPopularMovies = async () => {
  return fetchMovieApi({
    path: '/movie/popular',
    queryString: `language=en-US&page=1`,
  });
};

const getTopRatedMovies = async () => {
  return fetchMovieApi({
    path: '/movie/top_rated',
    queryString: `language=en-US&page=1`,
  });
};

const getMovie = async (movieId: string) => {
  return fetchMovieApi({
    path: `/movie/${movieId}`,
    queryString: `language=en-US&page=1`,
  });
};

export {
  fetchMovieApi,
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getMovie,
};
