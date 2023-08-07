'use client';

import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchButtonProps {
  children?: React.ReactNode;
  styles: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  children,
  styles,
}) => {
  const { pending } = useFormStatus();

  return (
    <button className={styles}>
      {children ? children : ''}
      {pending && 'Searching...'}{' '}
      {!pending && (
        <MagnifyingGlassIcon className='h-5 w-5' />
      )}
    </button>
  );
};

export default SearchButton;
