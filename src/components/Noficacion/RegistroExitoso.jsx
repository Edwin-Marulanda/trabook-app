import React from "react";
import './registroexitoso.css'

const RegistroExitoso = ({ mensaje, setMostrar }) => {

    return (

        <div className=" pt-5 alert alert-success custom-mensaje" role="alert">
            <div className="row pt-5">
                <div className="col-8">
                    <strong>{mensaje}</strong>
                </div>
                <div className="col-4 d-flex justify-content-rigth">
                    <button type="button"  className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}

export default RegistroExitoso