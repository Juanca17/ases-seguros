import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import logo from "../images/logo3.png" 
import logo2 from "../images/logo6.png"
import SideBar from "./Sidebar"

const Header = ({ siteTitle }) => {
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <header> 
              <div className="header-area">
                  <div className={`main-header header-sticky ${scrollTop > 400 ? 'sticky-bar' : ''}`}>
                      <div className="container-fluid">
                          <div className="row">
                              <div className="menu-wrapper align-items-center justify-content-between">
                                  <div className="header-left d-flex align-items-center">
                                      <div className="logo">
                                          <Link to="/"><img src={logo} alt="" /></Link>
                                      </div>
                                      <div className="logo2">
                                          <Link to="/"><img src={logo2} alt="" /></Link>
                                      </div>
                                      <div className="main-menu  d-none d-lg-block">
                                          <nav>
                                              <ul id="navigation">
                                                  <li><Link to="/">Inicio</Link></li> 
                                                  <li><Link to="/">Nosotros</Link></li>
                                                  <li><Link to="/">Seguros</Link></li>
                                              </ul>
                                          </nav>
                                      </div>   
                                  </div>
                                  <div className="header-right1 d-flex align-items-center">
                                      <div className="header-social">
                                          <a href="https://www.facebook.com/asesseguros" target="_blank" rel="noreferrer nofollow noopener">
                                              <i className="fab fa-facebook" role="button" aria-label="facebook" />
                                          </a>
                                          <a href="https://wa.me/+5213312200578" target="_blank" rel="noreferrer nofollow noopener">
                                              <i className="fab fa-whatsapp" role="button" aria-label="whatsapp" />
                                          </a>
                                          <a href="mailto:admon@asesseguros.com.mx" target="_blank" rel="noreferrer nofollow noopener">
                                              <i className="ti-email" role="button" aria-label="email" />
                                          </a>
                                      </div>
                                      <a className="btn header-btn2 ml-5" href="tel:+5213312200578"><i className="fas fa-phone-alt"></i>33 1220 0578</a>
                                  </div>
                                  <div className="col-12">
                                      <div className="mobile_menu d-block d-lg-none">
                                        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
      )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
