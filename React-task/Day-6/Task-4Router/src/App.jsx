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
      <div className='head'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GUVI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link "  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Live classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
     
<nav  className="navbar navbar-expand-lg bg-body-tertiary"> 
<div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to="/"> <a className="nav-link "  href="#">All</a></Link>
        </li>
       <li className="nav-item">
       <Link to="/fullstackdevelopment"><a className="nav-link" href="#">Full Stack Development</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/datascience"><a className="nav-link" href="#">Data Science</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/cybersecurity"><a className="nav-link" href="#">Cyber Security</a></Link>
        </li>
        
        <li className="nav-item">
        <Link to="/career"><a className="nav-link" href="#">Career</a></Link>
        </li>
      </ul>
    </div>
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
