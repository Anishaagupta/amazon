import React from 'react';
import {Link} from 'react-router-dom';
import data from '../../data';

const ProductScreen = (props) => {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    
    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back To Result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.altName}/>
                </div>
                <div className="details-info">
                    <ul>
                        <li><h4>{product.name}</h4></li>
                        <li><h4>{product.rating} stars ({product.numReview}Reviews)</h4></li>
                        <li><b>Price: &#8377; {product.price}</b></li>
                        <li><b>Description : </b>
                        <div>{product.description}</div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price: {product.price}</li>
                        <li>Status: {product.status}</li>
                        <li>Qty: 
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        </li>
                        <li>
                            <button className="button">Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ProductScreen;
