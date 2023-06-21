import HomeContainer from '@/containers/home';

import movies from '@/mocks/movies.json';

interface Props {
  params: { category: string };
}

export default function Home({ params }: Props) {
  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? movies.results.slice(0, 7) : [],
      }}
    />
  );
}
