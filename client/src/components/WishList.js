import React from 'react';
import '../index.css';


const WishList = ({ myBooks }) => {


  return (
    <div>  
        <div className="flex-row justify-space-between my-4">
            <p>hello my wish WishList</p>
            {myBooks &&
            myBooks.map((book) => (
                <div key={book} className="col-12 col-xl-6">
                    <div className="card mb-3">
                          <section className="cardbook" key={myBooks.book_id}>     
                              <h5 className="card-title">{myBooks.title} </h5>
                            
                              <h6 className="card-title">By: {myBooks.authors} </h6>
                                    {/* <a href={`/books/${book._id}`} target="_blank">Book Detail</a> */}
                          
                          </section>
                      </div>
                 </div>
             ))}
       </div>  
      </div>
  );
};

export default WishList;
