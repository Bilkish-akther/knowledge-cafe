import React from 'react';
import './BookMark.css'
import CartItem from '../CartItem/CartItem';

   const Bookmark =(props) => {
   const {bookmarkCart,totalTime} =props
   console.log(props);
   
    return (
        <div  className='bookmark-container'>
            <div className="spent-time">
                <h2>Spent time on read : {totalTime} min</h2>
            </div>
            <div className="bookmarked-blog">
                <h2>Bookmarked Blogs : {bookmarkCart.length}</h2>
                {bookmarkCart.map((product) =><CartItem product={product}></CartItem>)}
            </div>
        </div>
    );
};

export default Bookmark;