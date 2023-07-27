import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_BOOKS,QUERY_BOOKS_EDUCATION, QUERY_BOOKS_FICTION, QUERY_BOOKS_NONFICTION } from '../utils/queries';
import BookList from '../components/BookList';
import WishItemLine from '../components/WishItemLine';

const Welcome = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];
  // console.log(books);

  const { loading: loadingMe, data: dataMe } = useQuery(QUERY_ME);
  const mySavedBooks = dataMe?.me.savedBooks || [];
  console.log(mySavedBooks);

  const renderWishList = mySavedBooks.map((item) =>{
      return <WishItemLine key={item._id} item={item}/>;
    });

    
const { loading: loadingEducation, data: dataEducation } = useQuery(QUERY_BOOKS_EDUCATION);
const booksEducation = dataEducation?.booksEducation || [];
 console.log("education", booksEducation);

const { loading: loadingFiction, data: dataFiction } = useQuery(QUERY_BOOKS_FICTION);
const booksFiction = dataFiction?.booksFiction || [];

const { loading: loadingNonFiction, data: dataNonFiction } = useQuery(QUERY_BOOKS_NONFICTION);
const booksNonFiction = dataNonFiction?.booksNonFiction || [];
 
const [currentTab, setCurrentTab] = useState('All');

 const renderTab = () => {
  if (currentTab === 'All') {
    return <BookList
    books={books}
     title="Here are the books"
     />;
  }
  if (currentTab === 'Education') {
    return  <BookList
    books={booksEducation}
     title="Here are the books on education"
     />
  };
  if (currentTab === 'Fiction') {
    return  <BookList
    books={booksFiction}
     title="Here are the books on fiction"
     />
  };
  if (currentTab === 'NonFiction') {
    return  <BookList
    books={booksNonFiction}
     title="Here are the books on non-fiction"
     />
  };
  };

const handleCategory = (tab) => setCurrentTab(tab);



  return (
    <main>

<div className="nav nav-tabs">
     
     <a className="nav-item" style={{ padding: '1.0rem'}}
       href="#all"
       onClick={() => handleCategory('All')}
   
     >
       All Categories
     </a>
  
     <a className="nav-item" style={{ padding: '1.0rem'}}
       href="#education"
       onClick={() => handleCategory('Education')} 
  
     >
       Education
     </a>
 
   <a className="nav-item" style={{ padding: '1.0rem'}}
       href="#fiction"
       onClick={() => handleCategory('Fiction')} 
     >
       Fiction
     </a>
     <a className="nav-item" style={{ padding: '1.0rem'}}
       href="#non-fiction"
       onClick={() => handleCategory('NonFiction')} 
     >
       Non-Fiction
     </a> 
   
 </div>
   
        <aside className="aside-left mainbook">
               <p className="m-0" style={{ fontSize: '1.0rem', fontWeight: '650',
                                            width: '20%' }}>
                My Wishlist
                </p>
    
        <div>{renderWishList}</div>
    
        </aside>

        <div className="flex-row justify-center">
        {/* <div className="col-12 col-md-10 my-3"> */}
        {renderTab()}
        </div>
        {/* </div> */}
    </main>
  ); 
};

export default Welcome;
