import React from 'react';
import '../index.css';


const WishItem = ({ item }) => {
  return (
    <div className="item">
      <div className="content">

        <h6 className="icon1">  ❤️ </h6>
        <h5>{item.title} by {item.authors}</h5>
        
        <h6>{item.description}</h6>
        <button className="btn btn-light">
            <a href={`/books/${item.bookId}`} target="_blank">View</a>
        </button>
    
        <button className="btn btn-light"> Remove 🗑️</button>
      </div>
    </div>
  );
};

export default WishItem;
