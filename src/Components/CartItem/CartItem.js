import React from 'react';
import "./CartItem.css"

const CartItem = (props) => {
    const {authorImage,blogTitle}=props.product;
    return (
        <div className='cartItem'>
           <img src={authorImage} alt="" />
           <p>{blogTitle}</p>
        </div>
    );
};

export default CartItem;