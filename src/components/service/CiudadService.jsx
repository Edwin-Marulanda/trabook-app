
const API_URL = `${process.env.REACT_APP_API_URL}/ciudad/`;

export const listCiudadesPais = async(id_pais) => {
    return await fetch(`${API_URL}${id_pais}`)
}