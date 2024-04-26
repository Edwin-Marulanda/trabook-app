const API_URL = `${process.env.REACT_APP_API_URL}/login`;

export const login = async (dataAccess) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email":dataAccess.email, "password":dataAccess.password }),
    });

}



