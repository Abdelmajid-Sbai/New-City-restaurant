import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
export default function Footer() {
    
  
    return (
    <>
    
<footer class="  text-center text-lg-start bg-body-tertiary mt-3 mb-0 text-muted ">
  <section class="text-light bg-dark  pt-1">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-6 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>restaurant
          </h6>
          © 2024 Copyright:
          <a class="text-reset fw-bold p-0" href="http://127.0.0.1:8000/">New city restaurant</a>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Menu
          </h6>
          <p>
            <a href="#!" class="text-reset">Plats</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Boissons</a>
          </p> 
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            links
          </h6>
          
          <p>
            <a href="#!" class="text-reset">reserver</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Contact</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Tanger, NY 90000, Maroc</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            https://Abdelmajid-Sbai.github.io/Sbai.Abdelmajid
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
  
      </div>
  
    </div>
  </section>


 
</footer>
    </>
    )

}