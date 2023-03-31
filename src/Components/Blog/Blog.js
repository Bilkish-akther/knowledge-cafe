// import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
// import './Blog.css';

// const Blog = () => {

//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('products.json')
//             .then(res => res.json())
//             .then(data => setProducts(data))
//     }, []);



//     return (
//         <div className='blog-container'>
//             <div className="blog-main-container">
//                 {
//                     products.map(product => <Cart

//                         key={product.id}
//                         product={product}
//                     ></Cart>)
//                 }

//             </div>
//             <div className="cart-container">
//                 <div className="spent">
//                     <h3>Spent time on read : 177 min</h3>
//                 </div>
//                 <h3 className='bookmark'>Bookmarked Blogs : 8</h3>
//             </div>

//         </div>
//     );

// };
// export default Blog;