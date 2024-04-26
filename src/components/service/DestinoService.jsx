const API_URL = `${process.env.REACT_APP_API_URL}/destino/`;

export const listaDestinos = async() => {
    return await fetch(API_URL+"destinos")
}

export const listaDestinosDescuento = async() => {
    return await fetch(API_URL+"ofertas")
}

export const registrarDestino= async(destino) =>{
    console.log(destino.ciudad)
    return await fetch(API_URL+"registrar-destino", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "imagen": destino.imagen,
            "costo": destino.costo,
            "costo_descuento":destino.costoDescuento,
            "fecha_disponible":destino.disponibilidad,
            "ciudad_id":destino.ciudad
        })
    })
}

