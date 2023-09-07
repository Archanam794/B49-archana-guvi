import React from 'react';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import './App.css'
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import Career from './Career';
import CyberSecurity from './CyberSecurity';



function App() {
  

  return (
    <>
    <Router>
      <div>
      <nav className="navbar">
        <div className="container">
  <div className="logo"> <a href="https://www.guvi.in/blog/"><img src='./image/Guvi-blog-logo.png'alt='Guvi-blog-logo'></img></a></div>
 
  <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link" href="#">Disabled</a>
    </div>
    
 
</div>
        </nav>

      </div>
      <header className="header">
  <div className="container1">
    <a href='https://www.guvi.in/'><img src='./image/blog-header.png' height='172' width='1096'></img></a>
   
  </div>
</header>
<nav className="navbar navbar-expand-lg navbar-light bg-light">        
 <div className="navbar-nav mr-auto align">
            <Link className ="nav-link" to="/">All</Link>
            <Link className ="nav-link" to="/fullstackdevelopment">Full Stack Development</Link>
            <Link className ="nav-link" to="/datascience">Data Science</Link>
            <Link className ="nav-link" to="/cybersecurity">Cyber Security</Link>
            <Link className ="nav-link" to="/career">Career</Link>
</div>
</nav>

      <Routes>
        <Route path='/' exact Component={All} />
        <Route path='/fullstackdevelopment' exact Component={FullStackDevelopment} />
        <Route path='/datascience' exact Component={DataScience} />
        <Route path='/cybersecurity'exact Component={CyberSecurity} />
        <Route path='/career' exact Component={Career} />
      </Routes>

    </Router>
      
    </>
  )
}

export default App
