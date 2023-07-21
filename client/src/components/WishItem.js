import React from 'react';


const WishItem = ({ item }) => {
  return (
    <div className="item">
      <div className="content">
        <a
          className="header"
          href={item.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
        <div className="description">{item.description}</div>
        <button>Detail</button>
        <button>Remove from Wishlist</button>
      </div>
    </div>
  );
};

export default WishItem;
