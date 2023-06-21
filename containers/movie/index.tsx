import { FeaturedMovie } from '@/components/featured-movie';
import IMovieModel from '@/libs/models/movie.model';
import React from 'react';

interface Props {
  movie: IMovieModel;
}

function MovieContainer({ movie }: Props) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };
