import React, { useEffect, useState } from "react";
import './footer.css'
import * as ArticuloService from '../service/ArticuloService'
import * as SubsService from '../service/SubsService'

const Footer = () => {

    const [articulos, setArticulos] = useState([]);
    const [emailSubcription, setEmailSubcription] = useState(0)
    const logoImg = require.context('../../assets/img');

    const emailSubsChange = (e) => {
        setEmailSubcription(e.target.value);
    }

    const subcribirse = () => {

        SubsService.registroSubscripcion(emailSubcription).
            subscribe({
                next: response => {

                }, error: error => (
                    console.log(error)
                )
            });

    }

    const listArticulos = async () => {
        try {
            const res = await ArticuloService.listaArticulos();
            const datos = await res.json();
            setArticulos(datos);
        } catch (error) {
            console.error('Error al cargar los artículos:', error);
        }
    };

    useEffect(() => {
        listArticulos();
    }, []);

    return (<>

        <section className=" p-5 bg-section tam-h" >
            <div className="row">
                <div className="col-12 text-center">
                    <p className="fw-bold display-4">Get update with <span className="orange-text">lasted blog</span> </p>

                </div>

            </div>

            <div id="carouselLastedBlog" className="carousel carousel-dark slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                {
                                    articulos !== undefined ? <>
                                        {articulos.slice(0, 4).map((articulo) => {
                                            return <div key={articulo.id} className="col-3 w-25">
                                                <div className="card border-0 custom-width d-flex justify-content-center" >
                                                    <img className="card-img-top rounded-3" src={`data:image/png;base64, ${articulo.imagen}`} alt="Imagen del Artículo"
                                                        width="160" height="220" />
                                                    <div className="card-body">
                                                        <h5 className="card-title"> {articulo.titulo}</h5>
                                                        <p className="card-text">{articulo.fecha_publicacion}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </> : <></>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="container">
                            <div className="row">
                                {
                                    articulos !== undefined ? <>
                                        {articulos.slice(4, 8).map((articulo) => {
                                            return <div key={articulo.id} className="col-3 w-25">
                                                <div className="card border-0 custom-width d-flex justify-content-center" >
                                                    <img className="card-img-top rounded-3" src={`data:image/png;base64, ${articulo.imagen}`} alt="Imagen del Artículo"
                                                        width="160" height="220" />
                                                    <div className="card-body">
                                                        <h5 className="card-title"> {articulo.titulo}</h5>
                                                        <p className="card-text">{articulo.fecha_publicacion}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </> : <></>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselLastedBlog" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselLastedBlog" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
            </div>

        </section>


        <section className="bg-light p-5 position-relative">
            <div className="row position-absolute top-0 start-50 translate-middle w-75 rounded-3 ">
                <div className="card bg-orange back-subs">
                    <div className="card-body ">
                        <div className="col-12 text-center">
                            <p className=" m-5 display-4 fw-bold text-white">Subscribe and get exclusive deals & offer </p>
                        </div>
                        <div className="col-12 mt-5 mb-5 d-flex justify-content-center">
                            <form>
                                <div className="input-group custom-sub">
                                    <input type="email" className="custom-sub-input ps-5" placeholder="Enter your email"
                                        onChange={emailSubsChange} />
                                    <button onClick={subcribirse}
                                        className=" form-contorl custom-sub-botton bg-orange rounded-pill">Subscribe</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mb-3 pt-9">
                <div className="col-6 d-flex align-items-center">
                    <img src={logoImg("./logo.png")} alt="logo trabook" width="120" height="30" />
                </div>
                <div className="col-2">
                    <span className="fw-bold">Company</span>
                </div>
                <div className="col-2">
                    <span className="fw-bold">Contact</span>
                </div>
                <div className="col-2">
                    <span className="fw-bold">More</span>
                </div>
            </div>
            <div className="row">

                <div className="col-6 ">
                    <p className="w-50">Book your trip in minute, get full Control for much longer.</p>
                    <div id="social-icon">
                        <a className="text-dark pe-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                className="bi bi-facebook" viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg></a>
                        <a className="text-dark pe-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                className="bi bi-instagram" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>
                        <a className="text-dark pe-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                className="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path
                                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>

                        </a>

                    </div>
                </div>
                <div className="col-2">
                    <ul className="list-group border-0 ">
                        <li className=" ps-0 list-group-item bg-transparent border-0">About</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Careers</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Logistic</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Privacy & Policy</li>

                    </ul>
                </div>
                <div className="col-2">
                    <ul className="list-group border-0">
                        <li className="ps-0 list-group-item bg-transparent border-0">Help/FAQ</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Press</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Affilates</li>


                    </ul>
                </div>
                <div className="col-2">
                    <ul className="list-group border-0">
                        <li className="ps-0 list-group-item bg-transparent border-0">Press Center</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Our Blog</li>
                        <li className="ps-0 list-group-item bg-transparent border-0">Low fare tips</li>

                    </ul>
                </div>
            </div>
            <div className="row">
                <hr />
                <div className="col-6 text-black-50">
                    <p className="fs-6 ">Copyright, Trabook 2024. All rights reserved. </p>
                </div>
                <div className="col-6 d-flex justify-content-end text-black-50">
                    <p className="fs-6 fw-light">Terms & Conditions. </p>
                </div>
            </div>
        </section>
    </>
    )
}

export default Footer;