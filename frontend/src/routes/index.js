import React from 'react';
import {Route} from 'react-router-dom';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProductScreen from '../Screens/Product/ProductScreen';

const AppRouter = () =>{
    return (
        <div>   
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/products/:id" component={ProductScreen}/>  
        </div>
    )
}


export default AppRouter;