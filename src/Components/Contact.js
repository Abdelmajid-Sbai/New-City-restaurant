import React, { useState } from 'react';
import {Link} from 'react-router-dom'
export default function Contact() {
    
  
    return (
    <>
    
      <div className='d-flex justify-content-center'>
      <form className='col-lg-6 glass  p-3'>
      <h3><b className='text-white'> Contact Nos</b></h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">Nom</label>
          <input type="text" className="form-control" id="name" placeholder="Entrer votre nom" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Entrer votre email address" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Entrer votre message"></textarea>
        </div>
        <button type="submit" className="btn ">Envoyer</button>
      </form>
      </div>
      

 

   
    
    </>
    )

}