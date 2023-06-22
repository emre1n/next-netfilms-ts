import React from 'react';

import { FeaturedMovie } from '@/components/featured-movie';
import { Categories } from '@/components/categories';
import { MoviesSection } from '@/components/movies-section';

import IMovieModel from '@/libs/models/movie.model';
import IGenreModel from '@/libs/models/genre.model';

interface Props {
  topRatedMovies: IMovieModel[];
  popularMovies: IMovieModel[];
  selectedCategory: { id: string; movies: IMovieModel[] };
  categories: IGenreModel[];
}

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  selectedCategory,
  categories = [],
}: Props) => {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find(genre => genre.id === Number(selectedCategory.id))
              ?.name ?? ''
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Top Rated" movies={topRatedMovies.slice(1, 7)} />
      <MoviesSection title="Popular" movies={popularMovies.slice(7, 13)} />
    </div>
  );
};

export default HomeContainer;
