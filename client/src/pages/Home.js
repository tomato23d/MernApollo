import React from 'react';
import { useQuery } from '@apollo/client';

import BookList from '../components/BookList';
import { QUERY_BOOKS } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

console.log(books);

  return (
    <main>
   <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookList
              books={books}
              title="Here are the books to read"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
