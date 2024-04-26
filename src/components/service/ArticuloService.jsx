
const API_URL = `${process.env.REACT_APP_API_URL}/articulo/`;

export const listaArticulos = async() => {
    return await fetch(API_URL+"listar-articulos")
}

export const listaArticulosIndex = async() => {
    return await fetch(API_URL+"articulos-principal")
}

export const registrarArticulo= async(articulo) =>{
    return await fetch(API_URL+"registrar-articulo", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "imagen": articulo.imagen,
            "titulo": articulo.titulo,
            "contenido": articulo.contenido
        })
    })
}

export const editarArticulo= async(articulo) =>{
    return await fetch(`${API_URL}editar-articulo/${articulo.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "id":articulo.id,
            "imagen": articulo.imagen,
            "titulo": articulo.titulo,
            "contenido": articulo.contenido
        })
    })


}

export const eliminarArticulo = async (id_articulo) => {
    try {
        const response = await fetch(`${API_URL}eliminar-articulo/${id_articulo}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Error al eliminar el artículo');
        }
        return await response.json();

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};