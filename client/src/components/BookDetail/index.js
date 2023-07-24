import React from 'react';
import '../../index.css';
import imagedetail from '../BookDetail/image-6.png';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_BOOK } from '../../utils/queries';

const BookDetail = () => {
const { book_id } = useParams();
const { data } = useQuery(QUERY_SINGLE_BOOK, 
  {variables:  { id: book_id }} );

  const book = data?.book || data?.book || {};
 console.log(data);
  return (
    <div>
          <div className="container"> 
       
       <div  className="cardbook">
        
         <img className="picture" src={imagedetail} alt="b" />

            
                 <h3 className="card-title">{book.title} </h3>
                
                 <h5 className="card-title">By: {book.authors} </h5>
                 <h6 className="card-text">Description: {book.description}</h6>
                 <button className="btn btn-light" >
                   <a href={book.link}>Buy</a>
                 </button>
           
         
     
        </div> 
 </div>
 
      
      </div>
  );
};

export default BookDetail;
