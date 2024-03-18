import './Home.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    return (
        <>
        <nav class="navbar container navbar-expand-lg navbar-dark mb-0 p-0">
  <div class="container-fluid ">
  <Link className="navbar-brand color-yel" to="/"><img  src={process.env.PUBLIC_URL+"/images/logo1.png"} alt="My Photo" className="logo"/></Link>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
    <div class="collapse navbar-collapse d-flex justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link " to="/"><b>Accueil</b></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link " to="/menu"><b>Notre menu</b></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link " to="/Contact"><b>Contact</b></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link " to="/Reserver"><b>Reserver une table</b></Link>
        </li>
      </ul>
      
      </div>
    </div>
  </div>
</nav>
        </>
    )

}