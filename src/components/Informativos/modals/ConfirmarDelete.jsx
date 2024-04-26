import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as ArticuloService from "../../service/ArticuloService";

const ConfirmarDelete = ({ handleConfirmClose, showConfirm, handleClose, articuloDel,listArticulos }) => {


    const eliminarArticulo = async (id) => {
        const res = await ArticuloService.eliminarArticulo(id)
        await handleConfirmClose()
        await listArticulos()
    }


    
    return (
        <div className="row">
            <div className="col-12">
                <Modal show={showConfirm} onHide={handleConfirmClose} >
                    <Modal.Header >
                        <Modal.Title>Registro de articulos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="imagenArchivo" className="form-label">
                                    Confirma eliminación del articulo: <strong>{articuloDel.titulo}</strong>
                                </label>
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={handleConfirmClose}>
                            Cancelar
                        </Button>
                        <Button variant="success" onClick={()=>eliminarArticulo(articuloDel.id)} >
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}

export default ConfirmarDelete