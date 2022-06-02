import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Users from '../components/Users';
import UsersDetails from '../components/UsersDetails';
import PrivateRoute from './PrivateRoute';



function AllRoutes() {
  return (
      <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/users' element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            } />
            <Route path='/users/:id' element={
              <PrivateRoute>
                <UsersDetails />
              </PrivateRoute>
            } />
            <Route path='/login' element={<Login />}/>
        </Routes>
    </>
  )
}

export default AllRoutes