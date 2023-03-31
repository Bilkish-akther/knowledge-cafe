import React from 'react';
import './Header.css';
import Ellipse from '../../image/Ellipse 1.png';
const Header = () => {
    return (
        <nav>
            
            
            <div  className='header'>
               <h2>Knowledge Cafe</h2>
                <img src={Ellipse} alt="" />
            </div>
            <div className='line'>
            <hr />
            </div>
            
        </nav>
    );
};

export default Header;
