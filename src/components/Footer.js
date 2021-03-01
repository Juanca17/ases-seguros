
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <div className="footer-area footer-padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8">
                    <div className="single-footer-caption">
                        <div className="single-footer-caption">
                            <div className="footer-tittle">
                                <div className="footer-pera">
                                    <p>Dirección:<br/>José Guadalupe Zuno #2040, <br/>Col. Americana, C.P 44140 Guadalajara Jalisco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
            <div className="footer-border">
                <div className="row d-flex align-items-center">
                    <div className="col-xl-12 ">
                        <div className="footer-copy-right text-center text-white">
                            <p>&copy;{new Date().getFullYear()} by ASES Seguros. Design by <a href="https://www.linkedin.com/in/juancasanchez/" target="_blank" rel="noreferrer nofollow noopener">casann</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
