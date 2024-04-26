import React, { Fragment, useEffect, useState } from "react";
import FooterOth from "../Footer/FooterOth";
import * as UsuarioService from '../service/UsuarioService'
import RegistroExitoso from '../Noficacion/RegistroExitoso'

const SignUp = () => {

    const [names, setNames] = useState("")
    const [surnames, setSurnames] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mensaje, setMensaje] = useState("Usuario registrado")
    const [mostrar, setMostrar] = useState(false)

    const namesChange = (e) => {
        setNames(e.target.value);
    };
    const surnamesChange = (e) => {
        setSurnames(e.target.value);
    };
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const resgitrarUsuario = async (e) => {
        e.preventDefault();
        const usuario = {
            "nombres": names,
            "apellidos": surnames,
            "email": email,
            "password": password
        }
        try {
            await UsuarioService.registrarUsuario(usuario)
            setNames("");
            setSurnames("");
            setEmail("");
            setPassword("");
            setMostrar(true)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

    }, [mostrar]);

    return (
        <Fragment>
            {mostrar ? <RegistroExitoso {...{ mensaje, setMostrar }} /> : ""}
            <section className="pt-5" >
                <div className="row pt-5 d-flex justify-content-center align-items-center">

                    <div className="col-12 text-center">
                        <h5>User register</h5>
                    </div>
                    <div className="col-12 w-50 bg-orange rounded ">
                        <form className="p-4" onSubmit={resgitrarUsuario} >
                            <div className="mb-3">
                                <label htmlFor="names" className="form-label">Names</label>
                                <input type="text" onChange={namesChange} placeholder="Names"
                                    className="form-control" id="names" value={names} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surnames" className="form-label">Surnames</label>
                                <input type="text" onChange={surnamesChange} placeholder="Surnames" className="form-control"
                                    id="surnames" value={surnames} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email </label>
                                <input type="email" onChange={emailChange} placeholder="Email" className="form-control"
                                    id="email" value={email} required />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" onChange={passwordChange} placeholder="Password" className="form-control"
                                    value={password} id="password" required />
                            </div>
                            <div className="mt-0 mb-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-success">Registrar</button>
                            </div>

                        </form>

                    </div>


                </div>


            </section>
            {<FooterOth />}


        </Fragment>
    )
}
export default SignUp