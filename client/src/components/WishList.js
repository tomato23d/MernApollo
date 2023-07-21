import React from 'react';



const WishList = ({ mySavedBooks }) => {
    console.log(mySavedBooks);
   const renderedList = mySavedBooks.map((item) => {
    return <wLItem key={item.id} item={item} />;
  });

  return <div>{renderedList}</div>;
};

const wLItem = ({ item }) => {
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

export default wLItem;
