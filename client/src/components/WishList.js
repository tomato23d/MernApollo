import React from 'react';
import '../index.css';


const WishList = ({ books }) => {


  return (
    <div>  
        <div className="flex-row justify-space-between my-4">
            <p>hello my wish WishList</p>
            {books &&
            books.map((book) => (
                <div key={book} className="col-12 col-xl-6">
                    <div className="card mb-3">
                          <section className="cardbook" key={book.book_id}>     
                              <h5 className="card-title">{book.title} </h5>
                            
                              <h6 className="card-title">By: {book.authors} </h6>
                              <p className="card-text">Description: {book.description}</p>
                              
                            
                                    <a href={`/books/${book._id}`} target="_blank">Book Detail</a>
                          
                          </section>
                      </div>
                 </div>
             ))}
       </div>  
      </div>
  );
};

export default WishList;
