import React from 'react';
import { notFound } from 'next/navigation';

import { MovieContainer } from '@/containers/movie';

import movies from '@/mocks/movies.json';

interface Props {
  params: { id: string };
}

const MoviePage = ({ params }: Props) => {
  const movieDetail = movies.results.find(
    movie => movie.id === Number(params.id)
  );
  if (!movieDetail) {
    notFound();
  }
  return <MovieContainer movie={movieDetail!} />;
};

export default MoviePage;
