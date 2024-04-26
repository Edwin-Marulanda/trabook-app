const API_URL = `${process.env.REACT_APP_API_URL}/subs/`;

export const registroSubscripcion= async(email) =>{
    return await fetch(API_URL+"subscripcion", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "usuario":false
        })
    })


}