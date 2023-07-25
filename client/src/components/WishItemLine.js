import React from 'react';
import '../index.css';
import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_BOOK } from '../utils/mutations';


const WishItem = ({ item }) => {
  console.log(item);
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  const handleRemoveBook = async (item) => {
    try {
      const response = await removeBook(item._id)
      
    } catch (err) {
      console.error(err);
  }};

  return (
    <div className="item">
      <div className="content">

        <h6 className="icon1">  ❤️ </h6>
        <h5>{item.title} by {item.authors}</h5>
        {/* <h5> {item._id} </h5> */}
        <h6>{item.description}</h6>
        <button className="btn btn-light">
            <a href={`/books/${item._id}`} target="_blank">View</a>
        </button>
    
        <button className="btn btn-light"
         onClick={() => handleRemoveBook(item._id)}
        > Remove 🗑️</button>
      </div>
    </div>
  );
};

export default WishItem;
