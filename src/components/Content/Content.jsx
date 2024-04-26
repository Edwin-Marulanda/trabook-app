import React from "react";
import { GiWallet } from "react-icons/gi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MdOutlineDynamicForm } from "react-icons/md";
import "./content.css"

const Content = () => {
    return (
        <>
            <section className="bg-section d-flex justify-content-center align-items-center p-3 pb-5">
                <div className="row w-50 bg-white shadow-sm d-flex justify-content-center align-items-center p-3">
                    <div className="col-3 ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Location
                        </a>
                        <span className="text-sub">where are you going</span>
                    </div>
                    <div className="col-3">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Date
                        </a>
                        <span className="text-sub">where are you going</span>
                    </div>
                    <div className="col-3">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Guest
                        </a>
                        <span className="text-sub">where are you going</span>
                    </div>
                    <div className="col-3">
                        <button className="btn bg-orange p-1">Explore now</button>
                    </div>

                </div>
            </section>
            <section className=" p-5 bg-light">
            <div className="row back-todo">
                <div className="col-12 text-center">
                    <p className="fw-bold display-4">Things to need <span className="orange-text">to do.</span> </p>

                </div>
                <div className="col-12 d-flex justify-content-center text-center">
                    <p className="w-50">we ensure that you'll embark on a perfectly planet, safe vacation at a price you can
                        afford. </p>

                </div>

            </div>
            <div className="row d-flex d-flex justify-content-center">
                <div className="col-4 w-25">
                    <div className="card p-2 pb-0 back-card-sign width-card" >
                        <h2 className="color-icon-sign"><MdOutlineDynamicForm /></h2>
                        <div className="card-body pb-2">
                            <h5 className="card-title">Sign Up</h5>
                            <p className="card-text">Completes all the work associated with planning and processing</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 w-25">
                    <div className="card p-2 pb-0 back-card-money width-card" >
                    <h2 className="color-icon"><GiWallet/></h2>
                        <div className="card-body pb-2">
                            <h5 className="card-title">worth of Money</h5>
                            <p className="card-text">After successful access the book from exclusive deals & pricing</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 w-25">
                    <div className="card p-2 pb-0 back-card-travel width-card">
                    <h2 className="color-icon-travel"><LiaMapMarkedAltSolid /></h2>
                        <div className="card-body pb-2">
                            <h5 className="card-title">Exiting Travel</h5>
                            <p className="card-text">Start and explorer a wide range of exciting travel experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Content