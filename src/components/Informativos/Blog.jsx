import React, { Fragment, useEffect, useState } from "react";
import FooterOth from "../Footer/FooterOth";
import * as ArticuloService from '../service/ArticuloService'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { format } from 'date-fns';
import ConfirmarDelete from "./modals/ConfirmarDelete";
import dataTextBlog from '../../assets/estaticos/texto-destination.json'

const Blog = () => {
    const [articulos, setArticulos] = useState([]);
    const [show, setShow] = useState(false);
    const [showConfirm, setConfirmShow] = useState(false);
    const [id, setId] = useState(null);
    const [contenido, setContenido] = useState('');
    const [titulo, setTitulo] = useState('');
    const [imagenBase64, setImagenBase64] = useState('');
    const [articuloDel, setArticuloDel] = useState('');
    const [resgistrando, setRegistrando] = useState(true);
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));

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

    const handleClose = () => {
        setTitulo("")
        setContenido("")
        setImagenBase64("")

        setShow(false);
    }

    const handleShow = (articulo) => {
        if (articulo === null) {
            setShow(true)
            setRegistrando(true);
        } else {
            setRegistrando(false);
            setId(articulo.id)
            setTitulo(articulo.titulo)
            setContenido(articulo.contenido)
            setImagenBase64(articulo.imagen)
            setShow(true)
        }
    };
    const handleConfirmClose = () => setConfirmShow(false);
    const handleConfirmShow = async (articulo) => {
        setArticuloDel(articulo)
        setConfirmShow(true);
    }
    const tituloChange = (e) => setTitulo(e.target.value);
    const contenidoChange = (e) => setContenido(e.target.value);

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

    const registrarArticulo = async () => {
        if (!imagenBase64 || !titulo || !contenido) {
            console.error('Todos los campos son obligatorios');
            return;
        }
        if (resgistrando) {
            const datosRegistro = {
                imagen: imagenBase64,
                titulo,
                contenido
            };
            try {
                await ArticuloService.registrarArticulo(datosRegistro);

            } catch (error) {
                console.error('Error al registrar el artículo:', error);
            }
        } else {
            const datosEdicion = {
                id: id,
                imagen: imagenBase64,
                titulo: titulo,
                contenido: contenido
            };
            try {
                await ArticuloService.editarArticulo(datosEdicion);

            } catch (error) {
                console.error('Error al registrar el artículo:', error);
            }
        }
        handleClose();
        listArticulos();

    };

    return (
        <Fragment>
            <div className="row pt-5 ">
                <div className="col-12 pb-4 pt-5 d-flex justify-content-center">
                    <h3>Blog Trabook</h3>
                </div>
                <div className="row d-flex justify-content-center">
                    <strong className="w-75 text-center">
                        {dataTextBlog.blogWelcome.text}
                    </strong>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-12 pt-4 d-flex justify-content-center">
                    <h3>Articulos disponibles</h3>
                </div>
            </div>
            {datosUsuario && (datosUsuario.grupo_id === 1 && (
                <div className="row pt-4 pb-4">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-success" onClick={() => handleShow(null)}>Agregar Articulo</button>
                    </div>
                </div>))

            }
            {
                articulos !== undefined ? <>

                    {articulos.map((articulo) => {
                        return < div key={articulo.id}>
                            <div className="row shadow-lg p-3 mb-4 bg-white rounded">
                                <div className="col-2">
                                    <img src={`data:image/png;base64, ${articulo.imagen}`} alt="Imagen del Artículo"
                                        width="140" height="150" className="rounded" />
                                </div>
                                <div className="col-10">
                                    <div className="row mb-2">
                                        <div className="col-12 fw-bold">
                                            {articulo.titulo}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {articulo.contenido}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mt-3 text-secondary">
                                            {format(articulo.fecha_publicacion, "dd/MM/yyyy")}
                                        </div>
                                    </div>
                                    {datosUsuario && (datosUsuario.grupo_id === 1 && (
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-end">
                                                <button className="btn btn-warning me-2" onClick={() => handleShow(articulo)}><MdEdit /></button>
                                                <button className="btn btn-danger" onClick={() => handleConfirmShow(articulo)}><MdDelete /></button>
                                            </div>
                                        </div>))}
                                </div>

                            </div>

                        </div>
                    })}
                </> : <></>
            }
            {<FooterOth />}

            <div className="row">
                <div className="col-12">
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header >
                            <Modal.Title>
                                {!resgistrando ? 'Editar articulo' : 'Registro de articulos'}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                {imagenBase64 !== '' ? <img src={`data:image/png;base64, ${imagenBase64}`} alt="Imagen del Artículo"
                                    width="140" height="150" className="rounded" /> : ""
                                }
                                <div className="mb-3">
                                    <label htmlFor="imagenArchivo" className="form-label">Imagen</label>
                                    <input type="file" className="form-control" onChange={handleImagenChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="titulo" className="form-label">titulo</label>
                                    <input onChange={tituloChange} className="form-control" id="titulo" rows="3" value={titulo} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contenido" className="form-label">Contenido</label>
                                    <textarea onChange={contenidoChange} className="form-control" id="contenido"
                                        value={contenido} rows="3"></textarea>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="warning" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button onClick={registrarArticulo} variant="success" >
                                {!resgistrando ? 'Editar' : 'Registrar'}
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>

            <ConfirmarDelete {...{ handleConfirmClose, showConfirm, handleClose, articuloDel, listArticulos }} />


        </Fragment>
    );
};

export default Blog;
