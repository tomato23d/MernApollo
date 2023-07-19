import React from 'react';
import '../../index.css';
import myimage from '../BookList';
import Auth from '../../utils/auth';
//import BookDetail from '../BookDetail';


const BookList = ({ books, title }) => {
  if (!books.length) {
    return <h3>No books have been selected</h3>;
  }

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
              <div className="card mb-3">
                  <section className="cardbook" key={book.book_id}>     
                      <h5 className="card-title">{book.title} </h5>
                      <img className="picture" src={myimage} alt="b" />
                      <h6 className="card-title">By: {book.authors} </h6>
                      <p className="card-text">Description: {book.description}</p>
                      {/* <p className="card-text">i am a link: {book._id}</p> */}
                   
                      <button className="btn btn-primary">
                              <a href={`/books/${book._id}`} target="_blank">Book Detail</a>
                      </button>

                      <button className="btn btn-primary" >
                              Save to Wishlist
                      </button>
                  </section>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookList;
