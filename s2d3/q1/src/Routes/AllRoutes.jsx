import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Products from '../components/Products';
import ProductDetails from '../components/ProductDetails';

function AllRoutes() {
  return (
      <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
    </>
  )
}

export default AllRoutes