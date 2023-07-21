import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_ME, QUERY_BOOKS } from '../utils/queries';
import BookList from '../components/BookList';
//import WishList from '../components/WishList';
import WishItem from '../components/WishItem';


const Welcome = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];
  console.log(books);

  const { loading: loadingMe, data: dataMe } = useQuery(QUERY_ME);
  const mySavedBooks = dataMe?.me.savedBooks || [];
  console.log(mySavedBooks);

 
    const renderWishList = mySavedBooks.map((item) =>{
      return <WishItem key={item.id} item={item}/>;
    });


  return (
    <main>
  
   <aside className="aside-left mainbook">
   <p className="m-0" style={{ fontSize: '1.0rem', fontWeight: '650',
                                width: '30%' }}>
      My Wishlist
    </p>
    
     <div>{renderWishList}</div>
     {/* <div>
      <WishList mySavedBooks={mySavedBooks} />
     </div> */}
            
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
