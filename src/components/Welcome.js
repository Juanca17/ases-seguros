import React from "react"
import logo from "../images/logo5.png" 

const Welcome = () => (
  <div className="slider-area">
    <div className="slider-active">
      <div className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg1">
        <div className="container">
          <div className="row no-gutters align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
              <div className="hero-caption-left">
                <h1 data-animation="bounceIn" data-delay=".5s">Protege tu proyecto de vida</h1>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
              <div className="hero-caption-right">
                <img className="icon" src={logo} alt="" height="50px" />
                <h2 data-animation="fadeInUp" data-delay=".3s">
                  Con 30 años de experiencia, te ayudaremos a identificar, priorizar y transferir los riesgos con las mejores compañías de seguros.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Welcome
