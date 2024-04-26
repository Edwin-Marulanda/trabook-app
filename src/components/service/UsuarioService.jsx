
const API_URL = `${process.env.REACT_APP_API_URL}/usuario/`;

export const registrarUsuario= async(usuario) =>{
    return await fetch(API_URL+"registrar-usuario", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "nombres": usuario.nombres,
            "apellidos": usuario.apellidos,
            "email": usuario.email,
            "password": usuario.password,
            "grupo_id":2
        })
    })


}