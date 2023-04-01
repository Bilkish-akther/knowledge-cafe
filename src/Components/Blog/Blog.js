import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Blog.css';
import Bookmark from '../Bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnswerQuestion from '../AnswerQuestion/AnswerQuestion';

const Blog = () => {
    const successToast = (props) => toast.success(props, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        const errorToast = (props) => toast.error(props, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });


    const [products, setProducts] = useState([]);
    const [bookmarkCart, setBookmarkCart] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleSaveCart = (product) => {
        const blogItem = bookmarkCart.find((item) => item.id === product.id);
        if (blogItem) {
            errorToast('Already Added');
           
        } else {
            successToast('Added Successfully');
            const newCart = [...bookmarkCart, product];
            setBookmarkCart(newCart);
        }
    };


    const handleMarkAsRead = (time) => {
        const newTime = totalTime + time;
        setTotalTime(newTime);
    };




    return (
        <div className='blog-container'>
            <div className="blog-main-container">
                {
                    products.map(product => <Cart

                        key={product.id}
                        product={product}

                        handleSaveCart={handleSaveCart}
                        handleMarkAsRead={handleMarkAsRead}

                    ></Cart>)
                }

            </div>
            <div className="cart-container">
            
            

                < Bookmark bookmarkCart={bookmarkCart} totalTime={totalTime} />
                
            </div>
             

        </div>
             
            

    );

};
export default Blog;