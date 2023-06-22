import HomeContainer from '@/containers/home';

const API_URL = process.env.TMDB_API_URL;
const API_TOKEN = process.env.TMDB_API_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

const getSingleCategory = async (genreId: string) => {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?with_genres=${genreId}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(
      `${API_URL}/genre/movie/list?language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}/movie/popular?language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}/movie/top_rated?language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

interface Props {
  params: { category: string };
}

export default async function Home({ params }: Props) {
  let selectedCategory;

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getCategories();

  // const { results: topRatedMovies } = await getTopRatedMovies();
  // const { results: popularMovies } = await getPopularMovies();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoryPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? selectedCategory.slice(0, 6) : [],
      }}
    />
  );
}
