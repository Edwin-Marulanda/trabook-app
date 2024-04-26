
const API_URL = `${process.env.REACT_APP_API_URL}/pais`;

export const listPaises = async() => {
    return await fetch(API_URL)
}