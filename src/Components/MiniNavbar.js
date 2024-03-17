import './Home.css';
export default function MiniNavbar() {
    
    return (
        <>
      
            <div className="container row MiniNavbar navbar-dark   d-flex  ">
                <div className="firstsection  col-lg-6 col-sm-12">
                    <h6><span></span> Hotel Charf - 25 Rue al Farabi, 4 éme étage, Tangier, Morocco</h6>
                </div>
                <div className="secondsection row d-flex text-start   col-lg-6 col-sm-12">
                    <h6 className="col-5"><span></span> +212 711247341</h6>
                    <h6 className="col-7 text-center"><span></span> new.city.restaurant@gmail.com</h6>
                </div>
            </div>

     
        </>
    )

}