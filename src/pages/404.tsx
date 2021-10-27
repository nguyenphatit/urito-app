import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const PageNotFound: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Page not found</h1>
      <p>
        <a href={router.asPath}>Go home</a>
      </p>
    </div>
  );
};

export default PageNotFound;