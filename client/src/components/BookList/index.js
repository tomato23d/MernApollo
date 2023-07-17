import React from 'react';
import '../../index.css';

const BookList = ({ books, title }) => {
  if (!books.length) {
    return <h3>No books have been selected</h3>;
  }

  return (
    <div>
       <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {books &&
          books.map((book) => (
            <div key={book} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {book} <br />

                  <section className="cardbook" key={book._id}>     
                      <h5 className="card-title">{book.title} </h5>
                      <h6 className="card-title">By: {book.authors} </h6>
                      <p className="card-text">Description: {book.description}</p>
                      <a href={book.link} className="btn btn-primary">
                        Review this book
                      </a>
                  </section>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookList;