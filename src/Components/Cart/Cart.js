import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import '../Blog/Blog.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Cart = (props) => {

  const { authorImage, blogCoverImage, authorName, publishDate, readTime, blogTitle, tag } = props.product || {};
  const handleSaveCart = props.handleSaveCart;
  const handleMarkAsRead = props.handleMarkAsRead;


  return (
    <div className='class-container'>
      <img src={blogCoverImage} className='blogImage' alt="" />
      <div className='author-details'>
        <div className='author-info'>
          <img src={authorImage} className='author' alt="" />
          <div className='name-container'>
            <h4 className='author-name'> {authorName} <br /> <small>{publishDate}</small> </h4>
          </div>
        </div>
        <p className='blockTimeContainer'>{readTime} <button className='bookmark-btn' onClick={() => handleSaveCart(props.product)} ><FontAwesomeIcon icon={faBookmark} /></button> <ToastContainer /></p>
      </div>
      <div className='extra-info'>
        <h2>{blogTitle}</h2>
        <p>{tag}</p>
        <button className="read-btn" onClick={() => handleMarkAsRead(parseInt(readTime))}>Mark as read</button>
      </div>
      
      
    </div>

  );
};

export default Cart;