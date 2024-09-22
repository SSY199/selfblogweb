import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

 
 import Header from './components/Header'
 import Article from './Pages/Article'
 import AuthorPosts from './Pages/AuthorPosts'
 import Authors from './Pages/Authors'
 import Blog from './Pages/Blog'
//  import CategoryPosts from './Pages/CategoryPosts'
//  import CreatePosts from './Pages/CreatePosts'
 import Dashboard from './Pages/Dashboard'
//  import DeletePosts from './Pages/DeletePosts'
//  import EditPosts from './Pages/EditPosts'
//  import ErrorPage from './Pages/ErrorPage'
 import Home from './Pages/Home'
 import Login from './Pages/Login'
 import Logout from './Pages/Logout'
//  import PostDetail from './Pages/PostDetail'
 import Signin from './Pages/Signin'
 import Signout from './Pages/Signout'
//  import UserProfile from './Pages/UserProfile'
//  import Wiki from './Pages/Wiki'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Signup from './Pages/Signup'

export default function App() {
  return(
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/article' element={<Article/>} />
      <Route path='/authorposts' element={<AuthorPosts/>} />
      <Route path='/authors' element={<Authors/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signout' element={<Signout/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />

    </Routes>
    </BrowserRouter>
  )
}