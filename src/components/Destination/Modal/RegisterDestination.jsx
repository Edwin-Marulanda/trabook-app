import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as PaisService from '../../service/PaisService'
import * as CiudadService from '../../service/CiudadService'
import * as DestinoService from '../../service/DestinoService'

const RegisterDestination = ({ show, handleClose, listDestinos }) => {

    const [paises, setPaises] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const minDate = new Date().toISOString().split('T')[0];
    const [imagenBase64, setImagenBase64] = useState('');
    const [ciudad, setCiudad] = useState(null);
    const [costo, setCosto] = useState(null);
    const [costoDescuento, setCostoDescuento] = useState(null);
    const [disponibilidad, setDisponibilidad] = useState(new Date())


    const listPaises = async () => {
        try {
            const res = await PaisService.listPaises();
            const datos = await res.json()
            setPaises(datos)
        } catch (error) {
            console.log(error);
        }
    };

    const listarCiudades = async (pais) => {
        try {
            const res = await CiudadService.listCiudadesPais(pais);
            const datos = await res.json()
            setCiudades(datos)
        } catch (error) {
            console.log(error);
        }
    };

    const handleImagenChange = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagenBase64(reader.result.split(',')[1]);
            };
            reader.readAsDataURL(archivo);
        }
    };

    const handleCostoChange = (e) => {
        const costo = e.target.value;
        setCosto(costo);
    }

    const handleCostoDescuentoChange = (e) => {
        const costoDes = e.target.value;

        setCostoDescuento(costoDes);

    };

    const handleCiudadChange = (e) => {
        setCiudad(e.target.value);

    };

    const handleDisponibildadChange = (e) => {
        setDisponibilidad(e.target.value);

    };

    const registrarDestino = async () => {
        console.log("registrando")
        const datosRegistro = {
            imagen: imagenBase64,
            costo,
            costoDescuento,
            disponibilidad,
            ciudad
        };
        try {
            await DestinoService.registrarDestino(datosRegistro);
            handleClose();
            listDestinos();
            limpiarCampos();
        } catch (error) {
            console.error('Error al registrar el artículo:', error);
        }
    }

    const limpiarCampos = ()=>{
        setImagenBase64("");
        setCosto("");
        setCostoDescuento("");
        setCiudad("");
        setDisponibilidad("");
    }


    useEffect(() => {
        listPaises();
    }, []);

    return (

        <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header >
                <Modal.Title>
                    Registro de destino
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row">
                        <div className="col-12">
                            {imagenBase64 !== '' ? <img src={`data:image/png;base64, ${imagenBase64}`} alt="Imagen del Artículo"
                                width="140" height="150" className="rounded" /> : ""
                            }

                        </div>
                        <div className="col-12">

                            <div className="mb-3">
                                <label htmlFor="imagenArchivo" className="form-label">Imagen</label>
                                <input type="file" className="form-control" accept="image/*" onChange={handleImagenChange} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label">País</label>
                                <select className="form-select" onChange={(event) => listarCiudades(event.target.value)}>
                                    <option value="" disabled selected>Seleccionar país</option>
                                    {paises.map((pais) => (
                                        <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="contenido" className="form-label">Ciudad</label>
                                <select className="form-select" onChange={handleCiudadChange}>
                                    <option value="" disabled selected>Seleccionar ciudad</option>
                                    {ciudades.map((ciudad) => (
                                        <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label">Costo</label>
                                <input type="number" placeholder="Costo" onChange={handleCostoChange} className="form-control" value={costo} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">

                                <label htmlFor="costodes" className="form-label">Costo con descuento</label>
                                <input type="number" placeholder="Costo con descuento" onChange={handleCostoDescuentoChange} className="form-control" value={costoDescuento} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
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
                <Button variant="success" onClick={() => registrarDestino()} >
                    Registrar
                </Button>
            </Modal.Footer>
        </Modal>



    )
}

export default RegisterDestination