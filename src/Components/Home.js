import './Home.css';

export default function Home() {
    
    return (
        <>
         <div className='container accueil '>
            <h3 className='w-100 text-center h33 mb-5'>Bienvenue au restaurant New city</h3>
            <div className='row'>
                <div className='col-lg-6'>
                <img  src={process.env.PUBLIC_URL+"/images/home-page1.jpg"} alt="My Photo" className="w-100"/>
                </div>
                <div className='col-lg-6'>
                    <p>Situé au 4ème étage de l'hôtel Hilton, le restaurant Le New city vous offre une vue imprenable pour des repas haut perchés dans une salle qui surplombe la Méditerranée et offre un spot magnifique sur la Marina de Tanger, 
                        on en oublierait presque de manger, sauf que les mets proposés défient un peu ce décor hors du commun.</p>

                </div>

            </div>

            <h3 className='w-100 text-center mb-5 mt-5'>La recommandation du Chef </h3>
            <div className='row'>
                <div className='col-lg-6'>
                <img  src={process.env.PUBLIC_URL+"/images/home-chef.jpg"} alt="My Photo" className="w-100"/>
                </div>
                <div className='col-lg-6'>
                    <p>Le restaurant New city , sous la houlette du talentueux Chef Amine, 
                        célèbre les délices de la Méditerranée à travers une carte aussi riche que captivante. Chaque plat est une ode à l'audace, 
                        tout en préservant la simplicité et l'authenticité des saveurs méditerranéennes. Que ce soit pour le petit déjeuner ou pour déguster le couscous traditionnel, 
                        servi avec expertise tous les vendredis, chaque visite promet une expérience culinaire mémorable. Le Chef Amine, reconnu par de nombreux guides, invite chacun à se plonger dans une atmosphère chaleureuse et conviviale, 
                        où la cuisine raffinée et les parfums envoûtants de la Méditerranée fusionnent pour créer des moments inoubliables.</p>

                </div>

            </div>

            <div className='container  bg-dark '>
            <h3 className='w-100 text-center text-white  pb-2 mt-5 pt-3'>Plats sélectionnés</h3>
            <div className='row'>
                <div className='col-lg-6 bg-dark p-5'>
                <img  src={process.env.PUBLIC_URL+"/images/home-plat.jpg"} alt="My Photo" className="w-100"/>
                </div>
                <div className='col-lg-6 bg-dark'>
                    <ul>
                        <li>ENTRÉES FROIDES</li>
                        <li>ENTRÉES CHAUDES</li>
                        <li>CAZUELAS DE MARISCO</li>
                        <li>PÂTES</li>
                        <li>FILETS DE POISSON AVEC SAUCE</li>
                        <li>POISSON ENTIER AU FEU DE BOIS</li>
                        <li>VIANDE ET POULET </li>
                        <li>PAËLLA AVEC LE SECRET DU CHEF</li>
                        <li>DESSERTS</li>

    
                    </ul>

                </div>

            </div>


            <h3 className='w-100 text-center text-white mb-2 pt-5'>Boissons</h3>
            <div className='row'>
                <div className='col-lg-6 bg-dark '>
                <ul>
                        <li>Jus de fruits frais pressés</li>
                        <li>Smoothies aux fruits et légumes</li>
                        <li>Infusions de plantes et tisanes</li>
                        <li>Eau aromatisée naturelle (avec des tranches de fruits frais, des herbes fraîches)</li>
                        <li>Thé vert ou thé aux herbes</li>
                        <li>Lait végétal (amande, soja, avoine)</li>
                        <li>Eau de coco naturelle</li>
                        

    
                    </ul>
               
                </div>
                <div className='col-lg-6 bg-dark p-5'>
               
                <img  src={process.env.PUBLIC_URL+"/images/boison.jpg"} alt="My Photo" className="w-100"/>
                </div>

            </div>
            </div>


         </div>
        </>
    )

}