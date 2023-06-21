import React from 'react';

import movies from '@/mocks/movies.json';
import genres from '@/mocks/genres.json';

import { FeaturedMovie } from '@/components/featured-movie';
import { Categories } from '@/components/categories';
import { MoviesSection } from '@/components/movies-section';

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={movies.results[0]} />
      <Categories categories={genres.genres.slice(0, 5)} />
      <MoviesSection
        title="Popular Films"
        movies={movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
