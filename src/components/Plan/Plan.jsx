import React, { Fragment, useEffect, useState } from "react";
import welcomeInfo from '../../assets/estaticos/texto-destination.json'
import FooterOth from "../Footer/FooterOth";
import * as PlanService from '../service/PlanService'
import RegisterPlan from "./modal/RegisterPlan";
import PlanItem from "./PlanItem"

const Plan = () => {
    let plansFiltro = []
    const [filtro, setFiltro] = useState("");
    const [planes, setPlanes] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));

    const listPlanes = async () => {
        try {
            const res = await PlanService.listaPlanes();
            const datos = await res.json()
            setPlanes(datos)
        } catch (error) {
            console.log(error);
        }
    };

    const busqueda = (e) => {
        setFiltro(e.target.value)
    }

    if (!filtro) {
        plansFiltro = planes
    } else {
        plansFiltro = planes.filter((dato) =>
            dato.ciudad.toLowerCase().concat(dato.pais.toLowerCase()).includes(filtro.toLowerCase())
        )
    }

    useEffect(() => {
        listPlanes();
    }, []);
    return (
        <Fragment>
            <div className="row pt-5 ">
                <div className="col-12 pb-4 d-flex justify-content-center pt-5">
                    <h3>{welcomeInfo.planWelcome.title}</h3>
                </div>
                <div className="row d-flex justify-content-center">
                    <strong className="w-75 text-center">
                        {welcomeInfo.planWelcome.text}
                    </strong>
                </div>
            </div>
            <div className="row">

                <div className="col-10 mb-2">
                    <div className="input-group mb-3 mt-4">
                        <input type="text" placeholder="Buscar plan por ciudad o país..." value={filtro} className="form-control" aria-label="descripción"
                            aria-describedby="inputGroup-sizing-default" onChange={busqueda} />
                    </div>
                </div>

                {
                    datosUsuario ? datosUsuario.grupo_id === 1 ? (
                        <div className="col-2 mb-2">
                            <div className="input-group mb-3 mt-4">
                                <button className="btn btn-success" onClick={handleShow}>Registrar plan</button>
                            </div>
                        </div>
                    ) : (<></>) : (<></>)
                }

                {
                    plansFiltro.map((plan) => {
                        return <PlanItem key={plan.id * 2} {...{ plan }} />
                    }
                    )
                }

            </div>
            {<RegisterPlan {...{ show, handleClose, listPlanes }} />}
            {<FooterOth />}

        </Fragment>)


}


export default Plan