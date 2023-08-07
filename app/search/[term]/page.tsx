import { ResultsList } from '@/components';
import { getFetchUrl } from '@/lib/helpers';
import { PageResult, SearchParams } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react';

interface SearchPageProps {
  searchParams: SearchParams;
  params: {
    term: string;
  };
}

export const revalidate = 300;

const SearchPage: React.FC<SearchPageProps> = async ({
  params: { term },
  searchParams,
}) => {
  if (!term) {
    redirect('/');
  }

  const response = await fetch(getFetchUrl('api/search'), {
    method: 'POST',
    body: JSON.stringify({
      searchTerm: term,
      ...searchParams,
    }),
  });

  const results = (await response.json()) as PageResult[];

  return (
    <div>
      <ResultsList
        results={results}
        term={term}
      />
    </div>
  );
};

export default SearchPage;
