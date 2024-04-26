import React, { useEffect, useState } from "react";
import FooterOth from '../Footer/FooterOth'
import * as AboutService from '../service/AboutService'

const About = () => {

    const [abouts, setAbouts] = useState([])

    const listAbouts = async () => {
        try {
            const res = await AboutService.listAbouts();
            const datos = await res.json()
            setAbouts(datos)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listAbouts();
    }, []);

    return (
        <div className="row d-fle justify-content-center pt-5">
            <div className="col-12 w-75 pt-5" >
                {
                    abouts.map((about) => {
                        return < div key={about.id}>
                            <h3>{about.titulo}</h3>
                            <p className="mt-4 text-justify">
                                {about.contenido}
                            </p>
                        </div>
                    }
                    )
                }
            </div>
            {<FooterOth />}
        </div>)
}

export default About