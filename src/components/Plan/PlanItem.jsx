import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoNavigate } from "react-icons/io5";
import { IoMdText } from "react-icons/io";


const PlanItem = ({ plan }) => {

    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));
    return (
        <div className="col-3">
            <div className="card mb-2  d-flex justify-content-center">
                <img className="card-img-top rounded-3" src={`data:image/png;base64, ${plan.imagen}`} alt="Imagen del Artículo"
                    width="240" height="200" />
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
export default PlanItem