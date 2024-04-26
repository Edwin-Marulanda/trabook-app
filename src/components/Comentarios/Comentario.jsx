import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './comentario.css'

const Comentario = () => {

  const traerAlFrente = () => {
    let card = document.getElementById("card-2");
    let card1 = document.getElementById("card-1");

    card.style.background = "white"
    card.style.color = "black"
    card.style.top = "0px"
    card.style.left = "0px"
    card.style.zIndex = "3";
    card.style.animation = "bringToFront 0.6s forwards";


    card1.style.top = "70px"
    card1.style.left = "40px"

  }
  const enviarAtras = () => {
    let card = document.getElementById("card-2");
    let card1 = document.getElementById("card-1");

    card.style.background = "white"
    card.style.color = "black"
    card.style.top = "70px"
    card.style.left = "40px"
    card.style.zIndex = "0";
    card.style.animation = "bringToFront 0.6s forwards";

    card1.style.top = "0px"
    card1.style.left = "0px"

  }

  return (
    <section className=" p-5 bg-section align-items-center bg-two-section ">
      <div className="d-flex justify-content-end">
        <div className="col-6 md-5">
          <p className="fw-bold display-4">What people say <span className="orange-text">about Us.</span></p>
          <p className="width" >Our Clients send us bunch of smilies with our services and we love them.</p>
          <div className="d-flex">
            <button type="button" className="btn btn-carousel rounded-circle d-flex align-items-center me-1"
              aria-current="true" onClick={enviarAtras}>
              <FaArrowLeft />
            </button>
            <button type="button" aria-current="true"
              className="btn btn-carousel rounded-circle d-flex align-items-center" onClick={traerAlFrente}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="col-6 position-relative mt-5  mb-5">
          
          <div id="card-1" className="card card-front col-9 border-0 position-relative card-shadow ms-5 mb-5">
            <div className="card-body p-4">
              <p className="card-text mb-5">“Trabook's website offers a seamless experience for travelers, with its intuitive interface and comprehensive search features. Planning a vacation has never been easier!”</p>
              <h5 className="card-title fw-bold">Mike Taylor</h5>
              <p className="card-text">Lahore, Pakistan</p>
            </div>
          </div>

          <div id="card-2" className="card card-bottom col-9 border-0 position-absolute card-shadow ms-5">
            <div className="card-body p-4">
              <p className="card-text mb-5">“Trabook not only provides a wide range of travel options but also ensures peace of mind with its secure booking process. Trustworthy and efficient, it's my go-to platform for all my travel needs.”</p>
              <h5 className="card-title fw-bold ">Chris Thomas</h5>
              <p className="card-text texto-gris "></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Comentario