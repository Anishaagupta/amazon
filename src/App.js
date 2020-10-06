import React from 'react';
import './App.css';

function App() {
  return (
    <div className='grid-container'>
         <header className="header">
         <div className="brand">
           <a href="index.html">Amazon</a>
         </div>
         <div className="header-links">
           <a href="cart.html">Cart</a>
           <a href="signin.html">Sign In</a>
         </div>
         </header>
         <aside>Shopping Categories</aside>
         <main className="main">
           <div className="content">
           <ul className="products">
             <li><div className="product">
               <img src=""/>
               <div className="product-name">
                 Shirts
               </div>
             </div></li>
              
           </ul>
           </div>
         </main>
         <footer className="footer">
           &copy; Copyright All rights reserved.
         </footer>
    </div>
  );
}

export default App;
