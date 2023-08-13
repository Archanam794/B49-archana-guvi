import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import './index.css'
import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <Post name="post1" date="21jul"/>
   <Post name="post2" date="22jul"/>
   <Post name="post3" date="23jul"/>
   <Post name="post4" date="24jul"/>
  </React.StrictMode>,
)
