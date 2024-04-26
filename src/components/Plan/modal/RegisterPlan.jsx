import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as DestinoService from '../../service/DestinoService'
import * as PlanService from '../../service/PlanService'
import Select from 'react-select';

const RegisterPlan = ({ show, handleClose, listPlanes }) => {

    const [destinos, setDestinos] = useState([]);
    const minDate = new Date().toISOString().split('T')[0];
    const [costo, setCosto] = useState();
    const [dias, setDias] = useState();
    const [disponibilidad, setDisponibilidad] = useState(new Date())
    const [destino, setDestino] = useState();

    const listDestinos = async () => {
        try {
            const res = await DestinoService.listaDestinos();
            const datos = await res.json()
            setDestinos(datos)
        } catch (error) {
            console.log(error);
        }
    };

    const handleCostoChange = (e) => {
        const costo = e.target.value;
        setCosto(costo);
    }

    const handleDiasChange = (e) => {
        const dias = e.target.value;
        setDias(dias);
    }

    const handleDestinoChange = (e) => {
        setDestino(e.value);
    };
    const handleDisponibildadChange = (e) => {
        setDisponibilidad(e.target.value);

    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted gray',
            padding: 10,
        }),
    };

    const registrarPlan = async () => {
        const datosRegistro = {
            costo,
            disponibilidad,
            dias,
            destino_id: destino
        };
        try {
            await PlanService.registrarPlan(datosRegistro);
            handleClose();
            listPlanes();
            limpiarCampos();
        } catch (error) {
            console.error('Error al registrar el artículo:', error);
        }
    }
    const limpiarCampos = () => {
        setCosto("");
        setDias("");
        setDestino("");
        setDisponibilidad("");
    }
    useEffect(() => {
        listDestinos();
    }, []);

    return (

        <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header >
                <Modal.Title>
                    Registro de planes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form >
                    <div className="row">

                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label">Destino</label>
                                <Select
                                    options={
                                        destinos.map(destino => ({
                                            value: destino.destino_id,
                                            label: (
                                                <div className="row">
                                                    <div className="col-3 ">
                                                        <img src={`data:image/png;base64, ${destino.imagen}`} alt="Imagen destino"
                                                            width="60" height="50" className="rounded" />
                                                    </div>
                                                    <div className="col-9 d-flex align-items-center">
                                                        {destino.ciudad}, {destino.pais}
                                                    </div>
                                                </div>
                                            )
                                        }))}
                                    onChange={handleDestinoChange}
                                    styles={customStyles}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="dias" className="form-label">Días</label>
                                <input type="number" placeholder="Días" onChange={handleDiasChange} className="form-control"
                                    value={dias} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label">Costo</label>
                                <input type="number" placeholder="Costo" onChange={handleCostoChange} className="form-control" value={costo} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Fecha de disponibilidad</label>
                                <input type="date" min={minDate} onChange={handleDisponibildadChange} value={disponibilidad} className="form-control" e />
                            </div>
                        </div>

                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={() => registrarPlan()} >
                    Registrar
                </Button>
            </Modal.Footer>
        </Modal>



    )
}


export default RegisterPlan