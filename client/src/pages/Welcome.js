import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ME, QUERY_USER, QUERY_BOOKS } from '../utils/queries';
import BookList from '../components/BookList';


const Welcome = () => {
  // const { userId } = useParams();
  // const { loading, data } = useQuery(
  //   userId ? QUERY_USER : QUERY_ME, {variables:  { _id: userId }, });

  // const profile = data?.profile || data?.me || {};

  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

  console.log(books);


  return (
    <main>
  
   <aside className="aside-left mainbook">
   <p className="m-0" style={{ fontSize: '1.0rem', fontWeight: '650',
                                width: '30%' }}>
      My Wishlist
      publish me.savedBooks.title here
    </p>
      </aside>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookList
              books={books}
              title="Here are the books"
            />
          )}
        </div>
      </div>
    </main>
  );
 
};

export default Welcome;
