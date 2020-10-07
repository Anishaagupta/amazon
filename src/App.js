import React from 'react';
import './App.css';
import AppRouter from './routes/index';
import {Link} from 'react-router-dom';


const App=()=> {
  const openMenu=()=>{
  document.querySelector(".sidebar").classList.add('open');
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove('open');
  }
  return (
    <div className='grid-container'>
         <header className="header">
         <div className="brand">
           <button onClick={openMenu}>
             &#9776;{/* ASCII Code for hamburger menu */}
           </button>
           <Link to="/">Amazon</Link>
         </div>
         <div className="header-links">
           <a href="cart.html">Cart</a>
           <a href="signin.html">Sign In</a>
         </div>
         </header>
         <aside className="sidebar">
         <h3>Shopping Categories</h3>
         <button className="sidebar-close-button" onClick={closeMenu}>X</button>
         <ul>
           <li><a href="index.html">Trousers</a></li>
           <li><a href="index.html">Tops</a></li>
         </ul>
         </aside>
         <main className="main">
           <div className="content">
           <AppRouter/>
           
           </div>
         </main>
         <footer className="footer">
           &copy; Copyright All rights reserved.
         </footer>
    </div>
  );
}

export default App;
