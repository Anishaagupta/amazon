import React from 'react';
import {Link} from 'react-router-dom';
import data from '../../data';

const HomeScreen = (props) => {
    return (
        <div>
            <ul className="products">
             {
               data.products.map(product => 
               <li><div className="product">
               <Link to={'/products/'+ product._id}><img className="product-image" src={product.image} alt={product.altName}/></Link>
               
               <div className="product-name">
                <Link to={'/products/'+ product._id}>{product.name}</Link>
               </div>
               <div className="product-brand">{product.brand}</div>
               <div className="product-price">&#8377;{product.price}</div>
               <div className="product-rating">{product.rating} stars ({product.numReview} reviews)</div>
               </div></li> 
               )
             }
          
           </ul>
        </div>
    )
}

export default HomeScreen;
