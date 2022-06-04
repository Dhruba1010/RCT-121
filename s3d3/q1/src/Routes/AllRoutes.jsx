import React from 'react';
import Navbar from '../Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import PrivateRoute from './PrivateRoute';
import Todo from '../Components/Todo';
import Login from '../Components/Login';

function AllRoutes() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={
                <PrivateRoute>
                    <Todo />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default AllRoutes