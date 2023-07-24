import React from 'react';
//import '../BookList/booklist.css';
import '../../index.css';
import myimage from '../BookList/image-5.png';
import Auth from '../../utils/auth';
//import { QUERY_ME } from '../../utils/queries';
import { SAVE_BOOK } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
//import { useParams } from 'react-router-dom';


const BookList = ({ books, title }) => {

const [saveBook, { error }] = useMutation(SAVE_BOOK);
  
  const handleSaveBook = async (book) => {
    try {
      console.log(book);
      const data = await saveBook({
        variables: { bookData: {
          _id: book._id,
          bookId: book.bookId ,
          authors: book.authors,
          description: book.description,
          title: book.title,

        } },
      });
      {alert ("the book has been added to your wishlist")} ;
      window.location.reload();    
    } catch (err) {
      console.error(err);
    }
   
  };


  return (
    <div>
    <h3 className="text-primary">{title}</h3>  
    {Auth.loggedIn() ? (

<h4 className="text-primary"> Enjoy our selection </h4>

) : (

<h4 className="text-primary"> Please login to create your collection</h4>


)}

<div className="flex-row justify-space-between my-4">
    
        {books &&
          books.map((book) => (
            <div key={book} className="col-12 col-xl-6">
              <div className="cardbook">
              <aside>
                  <img className="picture" src={myimage} alt="b" />
                    </aside>  
                  {/* <section className="cardbook" key={book.book_id}>    */}
                 
                      <h5 className="card-title">{book.title} </h5>
                      <h6 className="card-title">By: {book.authors} </h6>
                      <p className="card-text">Description: {book.description}</p>
                     
                      <button className="btn btn-primary">
                              <a href={`/books/${book._id}`} target="_blank">Book Detail</a>
                      </button>

                      <button className="btn btn-primary" 
                         onClick={() => handleSaveBook(book)}  >
                              Save to Wishlist
                      </button>

                  {/* </section> */}
                  </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookList;
