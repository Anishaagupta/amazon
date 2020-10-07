import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const HomeScreen = (props) => {
    const [products, setProduct] =  useState([]);

    useEffect(() => {
       const fetchData = async () =>{
         const {data} = await axios.get("/api/products");
         setProduct(data);
       }
       fetchData();
      return () => {
        //
      }
    }, [])

    return (
        <div>
            <ul className="products">
             {
               products.map(product => 
               <li key={product._id}><div className="product">
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
