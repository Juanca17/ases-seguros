import React from "react"

const Contact = () => (
  <section className="contact-form-area gray-bg fix">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-5">
                    <div className="contact-caption">
                        <div className="section-tittle">
                            <h2>Contáctanos</h2>
                            <p>Lo que más nos gusta es estar frente a ti, conocerte y asesorarte de manera personalizada. Es nuestra esencia.</p>
                            <div className="btn mt-20"><i className="fab fa-whatsapp"></i> 33 2385 9907</div>
                            <br/>
                            <div className="btn mt-20"><i className="fas fa-phone-alt"></i> 33 1640 3011</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-xxl-7 col-lg-7">
                    <div className="contact-form-wrapper">
                      <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fasesseguros&tabs=timeline%2C%20messages&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Contact
