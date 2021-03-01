import React from "react"
import dolar from "../images/dolar.svg" 
import laptop from "../images/ordenador-portatil.svg"
import support from "../images/support.png" 

const About = () => (
  <section className="about-area section-padding gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-10">
                        <div className="about-caption">
                            <div className="section-tittle section-tittle3">
                                <h2>En ASES Seguros</h2>
                            </div>
                            <div className="support-caption">
                                <p className="pera-top">Nuestro servicio incluye no solo la asesoría para la contratación sino también la parte administrativa y operativa de las reclamaciones por siniestros presentados.</p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-10">
                        <div className="about-blog">
                            <div className="single-offers d-flex  mb-20">
                                <div className="icon">
                                    <img src={dolar} alt="this icon" className="icon-border"/>
                                </div>
                                <div className="offers-cap">
                                    <h3>Asesoría gratuita</h3>
                                    <p>Tenemos la misión de llevar el mensaje de la previsión para crear conciencia ante situaciones que pueden desequilibrar la economía personal, familiar y empresarial.</p>
                                </div>
                            </div>
                            <div className="single-offers d-flex  mb-20">
                                <div className="icon">
                                    <img src={laptop} alt="this icon" className="icon-border"/>
                                </div>
                                <div className="offers-cap">
                                    <h3>Asesoría virtual</h3>
                                    <p>Como todo el mundo, nos estamos adaptando a una nueva manera de comunicarnos. Así que a pesar que no compartir el mismo espacio, estaremos siempre frente a ti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape">
                <img src={support} alt=""/>
            </div>
        </section>
)

export default About
