import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {

    const logoImg = require.context('../../assets/img');
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));
    const logoutSesion = (e) => {
        e.preventDefault();
        console.log("cerrando")
        localStorage.removeItem("datosUsuario");
        window.location.reload();
    }
    return (
        <section className="bg-section">
            <div className="row fixed-top bg-light">
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <img src={logoImg("./logo.png")} alt="logo trabook" width="120" height="30" />
                </div>
                <div className="col-7 d-flex justify-content-center">
                    <nav className="navbar navbar-expand-lg  d-flex justify-content-between ">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/destination">Destination</Link>
                                <Link className="nav-link" to="/plans">Plans</Link>
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {
                    !datosUsuario ? (
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <Link className="btn btn-outline-logout me-2 h-75" to="/login">Login</Link>
                            <Link className="btn bg-orange h-75" to="/singup" >Sign up </Link>
                        </div>
                    ) : (
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <button className="btn btn-outline-logout me-2 h-75" onClick={logoutSesion} >Logout</button>
                        </div>
                    )
                }

            </div>
        </section>
    )
}

export default Navbar