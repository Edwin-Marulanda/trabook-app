import React, { Fragment, useEffect, useState } from "react";
import FooterOth from "../Footer/FooterOth";
import * as DestinoService from '../service/DestinoService'
import DestinoItem from "./DestinoItem";
import destinationInfo from '../../assets/estaticos/texto-destination.json'
import RegisterDestination from "./Modal/RegisterDestination";

const Destination = () => {

    let destinosFiltro = []
    const [filtro, setFiltro] = useState("");
    const [destinos, setDestinos] = useState([])
    const [show, setShow] = useState(false);
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const listDestinos = async () => {
        try {
            const res = await DestinoService.listaDestinos();
            const datos = await res.json()
            setDestinos(datos)
        } catch (error) {
            console.log(error);
        }
    };

    const busqueda = (e) => {
        setFiltro(e.target.value)
    }

    if (!filtro) {
        destinosFiltro = destinos
    } else {
        destinosFiltro = destinos.filter((dato) =>
            dato.ciudad.toLowerCase().concat(dato.pais.toLowerCase()).includes(filtro.toLowerCase())
        )
    }

    useEffect(() => {
        listDestinos();
    }, []);

    return (
        <Fragment>
            <div className="row pt-5 ">
                <div className="col-12 pb-4 d-flex justify-content-center pt-5">
                    <h3>{destinationInfo.destination.title}</h3>
                </div>
                <div className="row d-flex justify-content-center">
                    <strong className="w-75 text-center">
                        {destinationInfo.destination.text_first}
                    </strong>
                    <strong className="w-75 text-center pt-3">
                        {destinationInfo.destination.text_secund}
                    </strong>
                </div>
            </div>
            <div className="row">

                <div className="col-10 mb-2">
                    <div className="input-group mb-3 mt-4">
                        <input type="text" placeholder="Buscar destino por ciudad o país..." value={filtro} className="form-control" aria-label="descripción"
                            aria-describedby="inputGroup-sizing-default" onChange={busqueda} />
                    </div>
                </div>
                {
                    datosUsuario ? datosUsuario.grupo_id === 1 ? (
                        <div className="col-2 mb-2">
                            <div className="input-group mb-3 mt-4">
                                <button className="btn btn-success" onClick={handleShow}>Registrar destino</button>
                            </div>
                        </div>) : (<></>) : (<></>)
                }
                {
                    destinosFiltro.map((destino) => {
                        return <DestinoItem key={destino.id * 2} {...{ destino }} />
                    }
                    )
                }
            </div>
            {<RegisterDestination {...{ show, handleClose, listDestinos }} />}
            {<FooterOth />}
        </Fragment>
    )
}

export default Destination