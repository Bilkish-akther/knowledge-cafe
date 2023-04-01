import React from 'react';
import './Cart.css';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'





const Cart = (props) => {

  const { authorImage, blogCoverImage, authorName, publishDate, readTime, blogTitle, tag, btn } = props.product || {};

  return (
    <div>

      <img src={blogCoverImage} className='blogImage' alt="" />


      <div className='author-details'>

        <div className='author-info'>
          <img src={authorImage} className='author' alt="" />
          <div>
            <h4> {authorName} <br /> <small>{publishDate}</small> </h4>

          </div>
        </div>
        <p>{readTime} <button className='bookmark-btn' ><FontAwesomeIcon icon={faBookmark} /></button></p>
      </div>

      <div className='extra-info'>
        <h2>{blogTitle}</h2>
        <p>{tag}</p>
        <p>{btn}</p>
      </div>
    </div>

  );
};

export default Cart;