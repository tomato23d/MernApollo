import React from 'react';
import '../../index.css';
//import myimage from '../BookList';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_BOOK } from '../utils/queries';

const BookDetail = ({ bookId }) => {
 
  return (
    <div>
       <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
       
            <div  className="col-12 col-xl-6">
              <div className="card mb-3">
                

                  <section className="cardbook" >     
                      <h5 className="card-title">{title} </h5>
                     
                      <h6 className="card-title">By: {authors} </h6>
                      <p className="card-text">Description: {description}</p>
                      <p className="card-text">View Price</p>
                  </section>
              
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookDetail;
