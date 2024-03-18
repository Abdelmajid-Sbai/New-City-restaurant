import React, { useState } from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
export default function Menu() {
    
  
    return (
    <>
    <div className="container menu  py-5" >
      
      <div className='container menu1 pb-5'>
            

            <div className='container  '>
            <h3 className='w-100 text-center text-white titre  pb-2 mt-5 pt-2'>Notre Menu</h3>
            <li class="horizontal-line mb-5"></li>
            <div className='row'>
                <div className='col-lg-6  p-5'>
                <img  src={process.env.PUBLIC_URL+"/images/food1.jpg"} alt="My Photo" className="w-100"/>
                </div>
                <div className='col-lg-6 div-ul bg-dark'>
                  <h5>hi</h5>
                    <ul>
                    <li className='titre'><b>ENTRÉES FROIDES</b></li>
                    <li class="horizontal-line"></li>
                        <li>Anchois marinés à la façon espagnole</li>
                        <li>Délicieuse salade marina aux fruits méditerranéens </li>
                        <li>Assiette de fromage royale aux fruits secs </li>
                        <li>Gâteau salade quinoa aux crevettes et fruits de saison</li>
                        <li>Carpaccio de boeuf façon du chef</li>
                        <li>Jardin de saumon fumé au caviar et avocat</li>
                        <li>Ceviche de saumon à la gelée d’agrumes </li>
                    </ul>
                </div>

            </div>
            <h3 className='w-100 text-center text-white  pb-2 mt-5 pt-3'>Plats sélectionnés</h3>
            <div className='row'>
                
                <div className='col-lg-6 div-ul bg-dark'>
                  <h5>hi</h5>
                    <ul>
                    <li className='titre'><b>ENTRÉES CHAUDES</b></li>
                    <li class="horizontal-line"></li>
                        <li>
Croquettes de fromage sauce moutarde
</li>
                        <li>
Croquettes de poulet sauce fromagère
</li>
                        <li>
Croquettes de poisson piquante
</li>
                        <li>Goût merveilleux de soupe de poisson et croûtons à l’ail </li>
                        <li>
Crevettes à la plancha
</li>
                        <li>
Calamars de la Méditerranée frits, sauce tartare
</li>
                        <li>
Crevettes royales grillées (la pièce)
</li>
<li>

Cigala grillée

</li>
<li>
Crevettes royales grillées (la pièce)
</li>
<li>

Al mijas aux quatre herbes façon espagnole

</li>
                    </ul>
                </div>
                <div className='col-lg-6  p-5'>
                <img  src={process.env.PUBLIC_URL+"/images/food3.jpg"} alt="My Photo" className="w-100"/>
                </div>

            </div>

            


            
            </div>


         </div>

      
      

      
    </div>

   
    
    </>
    )

}