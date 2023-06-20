import React from 'react';

import movies from '@/mocks/movies.json';
import genres from '@/mocks/genres.json';

import { FeaturedMovie } from '@/components/featured-movie';
import { Categories } from '@/components/categories';

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={movies.results[0]} />
      <Categories categories={genres.genres.slice(0, 5)} />
    </div>
  );
};

export default HomeContainer;
