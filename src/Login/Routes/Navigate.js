import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import Layout from '../Pages/Layout'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path ="home" element={<Home/>}/>
    <Route path="/layout" element={<Layout/>}/>
    <Route path ="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App