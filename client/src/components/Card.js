import React from 'react';
import '../index.css';
import myimage from '../images/image-5.png';

export default function Card(props) {
  console.log(props);
  return (
    
    <div>
    <h1>your book shelf</h1>
    <div className="mainbook">  
      {props.books.map((item) => (
        <section className="cardbook" key={item.id}>     
         <h5 className="card-title">{item.title} </h5>
         <img className="picture" src={myimage} alt="b" />
         <h6 className="card-title">By: {item.authors} </h6>
         <p className="card-text">Description: {item.description}</p>
         <a href={item.link} className="btn btn-primary">
            Review this book
        </a>
        </section>
 ))}
  
    </div>
    </div>
  );
}
