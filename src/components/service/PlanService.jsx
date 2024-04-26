const API_URL = `${process.env.REACT_APP_API_URL}/plan/`;

export const listaPlanes = async() => {
    return await fetch(API_URL+"planes")
}

export const listaUltimoPlanes = async() => {
    return await fetch(API_URL+"ultimos")
}

export const registrarPlan = async(plan) =>{
    return await fetch(API_URL+"registrar-plan", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "costo": plan.costo,
            "fecha_disponible":plan.disponibilidad,
            "dias":plan.dias,
            "destino_id":plan.destino_id
        })
    })
}