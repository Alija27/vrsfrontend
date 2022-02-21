import React from 'react'
import { Header } from './components/admin/layouts/Header';
import { Sidebar } from './components/admin/layouts/Sidebar';
import { Footer } from './components/admin/layouts/Footer';
import { Dashboard } from './components/admin/layouts/Dashboard';
import { Routes,Route } from 'react-router-dom';
import { UserIndex } from './components/admin/users/UserIndex';
import { UserCreate } from './components/admin/users/UserCreate';

export const Admin = () => {
  return (
    <div>
        <Header/>
      <Sidebar/>
        <Routes>
           <Route path="/admin" element={<Dashboard/>}/>
           <Route path="/users" element={<UserIndex/>}/>
           <Route path="/users/create" element={<UserCreate/>}/>
           
        </Routes>
       
      <Footer/>
    </div>
  )
}
