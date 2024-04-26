import React, { Fragment, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { GiPositionMarker } from "react-icons/gi";
import { IoNavigate } from "react-icons/io5";
import * as DestinoService from '../service/DestinoService'
import * as PlanService from '../service/PlanService'
import './Sales.css'
const Sales = () => {

    const [destinos, setDestinos] = useState([]);
    const [planes, setPlanes] = useState([]);

    const listDestinos = async () => {
        try {
            const res = await DestinoService.listaDestinosDescuento();
            const datos = await res.json();
            setDestinos(datos);
        } catch (error) {
            console.error('Error al cargar los destinos', error);
        }
    };

    const listPlanes = async () => {
        try {
            const res = await PlanService.listaUltimoPlanes();
            const datos = await res.json();
            setPlanes(datos);
        } catch (error) {
            console.error('Error al cargar los destinos', error);
        }
    };

    useEffect(() => {
        listDestinos();
        listPlanes();
    }, []);

    return (
        <Fragment>
            <section className=" p-5 bg-section align-items-center">
                <p className="fw-bold display-4 text-center">Exclusive <span className="orange-text">deals & discounts</span></p>
                <p className="text-center with">Discover our fantastic early booking discounts & start planning your journey.
                </p>
                <div className="row justify-content-center">

                    <div id="carouselLastedOffer" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="100000">
                                <div className="container d-flex justify-content-center">
                                    <div className="row w-80">
                                        {
                                            destinos.length > 0 ? <>
                                                {destinos.slice(0, 4).map((destino) => {
                                                    return <div key={destino.id} className="col-3">
                                                        <div className="card d-flex justify-content-center" >
                                                            <img className="card-img-top rounded-3" src={`data:image/png;base64, ${destino.imagen}`} alt="Imagen del Artículo"
                                                                width="110" height="180" />
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-8 me-0 pe-0">
                                                                        <h5 className="card-title ">{destino.ciudad}</h5>
                                                                    </div>
                                                                    <div className="col-2 d-flex me-0 pe-0   justify-content-end">
                                                                        <span className="orange-text"><FaStar /></span>

                                                                    </div>
                                                                    <div className="col-2 d-flex justify-content-end">
                                                                        <p className="card-text ">{destino.puntos}</p>
                                                                    </div>


                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-1 pe-0 me-0">
                                                                        <GiPositionMarker />
                                                                    </div>
                                                                    <div className="col-11">
                                                                        <p className="card-text">{destino.pais}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6 ">
                                                                        <p className="card-text me-3 mb-0 parrafo-gris"><del>${destino.costo}</del></p>
                                                                    </div>
                                                                    <div className="col-6 d-flex justify-content-end">
                                                                        <p className="card-text orange-text ">${destino.costo_descuento}</p>
                                                                    </div>
                                                                </div>
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
                                    <div className="row w-80">
                                        {
                                            destinos.length > 0 ? <>
                                                {destinos.slice(4, 8).map((destino) => {
                                                    return <div key={destino.id} className="col-3">
                                                        <div className="card d-flex justify-content-center" >
                                                            <img className="card-img-top rounded-3" src={`data:image/png;base64, ${destino.imagen}`} alt="Imagen del Artículo"
                                                                width="110" height="180" />
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-8 me-0 pe-0">
                                                                        <h5 className="card-title ">{destino.ciudad}</h5>
                                                                    </div>
                                                                    <div className="col-2 d-flex me-0 pe-0   justify-content-end">
                                                                        <span className="orange-text"><FaStar /></span>

                                                                    </div>
                                                                    <div className="col-2 d-flex justify-content-end">
                                                                        <p className="card-text ">{destino.puntos}</p>
                                                                    </div>


                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-1 pe-0 me-0">
                                                                        <GiPositionMarker />
                                                                    </div>
                                                                    <div className="col-11">
                                                                        <p className="card-text">{destino.pais}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6 ">
                                                                        <p className="card-text me-3 mb-0 parrafo-gris"><del>${destino.costo}</del></p>
                                                                    </div>
                                                                    <div className="col-6 d-flex justify-content-end">
                                                                        <p className="card-text orange-text ">${destino.costo_descuento}</p>
                                                                    </div>
                                                                </div>
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
                        <div className="d-flex justify-content-center">
                            <button data-bs-target="#carouselLastedOffer" data-bs-slide="prev"
                                className="btn btn-carousel rounded-circle d-flex align-items-center me-1"
                                aria-current="true" aria-label="Slide 1" >
                                <FaArrowLeft />
                            </button>
                            <button data-bs-target="#carouselLastedOffer" data-bs-slide-to="next" aria-current="true"
                                aria-label="Slide 2" className="btn btn-carousel rounded-circle d-flex align-items-center">
                                <FaArrowRight />
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" p-5 bg-section align-items-center ">
                <div className="back-best">
                    <p className="fw-bold display-4 text-center">Best <span className="orange-text">vacation plan</span></p>
                    <p className="text-center with">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!</p>

                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-carousel rounded-circle d-flex align-items-center me-1"
                        data-bs-target="#carouselLastedPlan" aria-label="Left Align" data-bs-slide-to="next" aria-current="true">
                        <FaArrowLeft />
                    </button>
                    <button type="button" data-bs-target="#carouselLastedPlan" data-bs-slide-to="prev" aria-current="true"
                        className="btn btn-carousel rounded-circle d-flex align-items-center">
                        <FaArrowRight />
                    </button>
                </div>
                <div className="row justify-content-center">
                    <div id="carouselLastedPlan" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <div className="container d-flex justify-content-center">
                                    <div className="row w-80">
                                        {
                                            planes.length > 0 ? <>
                                                {planes.slice(0, 3).map((plan) => {
                                                    return <div key={plan.id * 4} className="col-4">
                                                        <div className="card d-flex justify-content-center" >
                                                            <img className="card-img-top rounded-3" src={`data:image/png;base64, ${plan.imagen}`} alt="Imagen del Artículo"
                                                                width="110" height="230" />
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-9 me-0 pe-0">
                                                                        <h5 className="card-title ">{plan.ciudad}, {plan.pais}</h5>
                                                                    </div>
                                                                    <div className="col-3 d-flex justify-content-end">
                                                                        <p className="card-text fw-bold orange-text">${plan.costo}k</p>
                                                                    </div>


                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-1 pe-0 me-0">
                                                                        <span className="orange-text"> <IoNavigate /></span>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <p className="card-text text-secondary fw-bold">{plan.dias} Days Tip</p>
                                                                    </div>
                                                                    <div className="col-1 ">
                                                                        <span className="orange-text"><FaStar /></span>
                                                                    </div>
                                                                    <div className="col-1 d-flex align-items-end">
                                                                        <span className="card-text text-secondary">{plan.puntuacion}</span>

                                                                    </div>
                                                                </div>

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
                                    <div className="row w-80">
                                        {
                                            planes.length > 0 ? <>
                                                {planes.slice(3, 6).map((plan) => {
                                                    return <div key={plan.id * 2} className="col-4">
                                                        <div className="card d-flex justify-content-center" >
                                                            <img className="card-img-top rounded-3" src={`data:image/png;base64, ${plan.imagen}`} alt="Imagen del Artículo"
                                                                width="110" height="230" />
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-9 me-0 pe-0">
                                                                        <h5 className="card-title ">{plan.ciudad}, {plan.pais}</h5>
                                                                    </div>
                                                                    <div className="col-3 d-flex justify-content-end">
                                                                        <p className="card-text fw-bold orange-text">${plan.costo}k</p>
                                                                    </div>


                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-1 pe-0 me-0">
                                                                        <span className="orange-text"> <IoNavigate /></span>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <p className="card-text text-secondary fw-bold">{plan.dias} Days Tip</p>
                                                                    </div>
                                                                    <div className="col-1 ">
                                                                        <span className="orange-text"><FaStar /></span>
                                                                    </div>
                                                                    <div className="col-1 d-flex align-items-end">
                                                                        <span className="card-text text-secondary">{plan.puntuacion}</span>

                                                                    </div>
                                                                </div>

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

                    </div>


                </div>
            </section>
        </Fragment>
    )
}

export default Sales