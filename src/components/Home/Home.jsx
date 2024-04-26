import React from "react";
import './home.css'
import imgViajero from'../../assets/img/viajero.png'

const Home = () =>{
    return (
        <section className="p-5 bg-section mt-5">
            <div className="row">
                <div className="col-6">
                    <p className="fw-bold display-2">Get started your exiting <span className="orange-text">journey</span> with
                        us.</p>
                    <p>A team of experienced tourism professionals will provide you with the best advice and tips for
                        your desire place.</p>
                    <button className="btn btn-outline-logout">Discover now</button>
                </div>
                <div className="col-6">
                    <img className="img-fluid" src={imgViajero} alt="imagen viajero" />
                </div>
            </div>
        </section>
    )
}

export default Home