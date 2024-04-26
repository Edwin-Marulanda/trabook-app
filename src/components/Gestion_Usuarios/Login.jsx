import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as LoginService from '../service/LoginService'
import './gestion.css'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const funcLogin = async (e) => {
        e.preventDefault();

        try {
            const dataAccess = {
                email,
                password
            }
            const res = await LoginService.login(dataAccess);
            const datos = await res.json()

            if (datos.error === undefined) {
                setError(false)
                localStorage.setItem('datosUsuario', JSON.stringify(datos));
                navigate('/');
                window.location.reload(); 
            } else {
                setError(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
    }, []);


    return (
        <Fragment>
            <section className="pt-5" >
                <div className="row pt-5 d-flex justify-content-center align-items-center">
                    {error && (<div className="alert alert-danger alert-dismissible fade show position-absolute w-50 top-10" role="alert">
                        <strong>Error!</strong> Usuario o contraseña invalidos.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setError(false)}></button>
                    </div>)}
                    <div className="col-12 text-center">
                        <h5>Login</h5>
                    </div>
                    <div className="col-12 w-50 bg-orange rounded  back-subs">
                        <form className="p-4 " onSubmit={funcLogin} >
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" onChange={emailChange} placeholder="Email"
                                    className="form-control" id="email" value={email} required />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" onChange={passwordChange} placeholder="Password" className="form-control"
                                    id="password" value={password} required />
                            </div>

                            <div className="mt-0 mb-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )


}

export default Login