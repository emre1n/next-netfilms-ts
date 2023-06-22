import React from 'react';
import { notFound } from 'next/navigation';

import { MovieContainer } from '@/containers/movie';

import movies from '@/mocks/movies.json';

const API_URL = process.env.TMDB_API_URL;
const API_TOKEN = process.env.TMDB_API_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

const getMovie = async (movieId: string) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

interface Props {
  params: { id: string };
}

const MoviePage = async ({ params }: Props) => {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }
  return <MovieContainer movie={movieDetail!} />;
};

export default MoviePage;
