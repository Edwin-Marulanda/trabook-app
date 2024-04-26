import React, { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { GiPositionMarker } from "react-icons/gi";
import { IoMdText } from "react-icons/io";

const DestinoItem = ({ destino }) => {

    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));

    return (
        <div className="col-3">
            <div className="card mb-2 ">
                <div className="card-body pb-1 pt-2">
                    <div className="d-flex justify-content-center">
                        <img src={`data:image/png;base64, ${destino.imagen}`} alt="Imagen destino" 
                        width="240" height="190" className="rounded" />
                    </div>
                    <div className="row">
                        <div className="col-8 me-0 pe-0">
                            <h5 className="card-title ">{destino.ciudad}</h5>
                        </div>
                        <div className="col-2 d-flex me-0 pe-0 justify-content-end">
                            <span className="orange-text"><FaStar /></span>

                        </div>
                        <div className="col-2">
                            <p className="card-text ">{destino.puntos}</p>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-1 pe-0 me-0">
                            <GiPositionMarker />
                        </div>
                        <div className="col-9">
                            <p className="card-text">{destino.pais}</p>
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                            <p className="card-text orange-text ">${destino.costo_descuento}</p>
                        </div>
                    </div>
                    { datosUsuario? datosUsuario.grupo_id === 2 ? (
                        <div className="row pt-0 pb-0 mt-0">
                            <div className="col-12 d-flex justify-content-end pe-0">
                                <button className="btn btn-size" data-bs-toggle="tooltip" data-bs-placement="left" title="Agregar comentario">
                                <IoMdText />
                                </button>

                            </div>
                        </div>) : "":""}
                </div>
            </div>
        </div>

    )
}
export default DestinoItem