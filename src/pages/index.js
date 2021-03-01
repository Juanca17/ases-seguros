import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Welcome from "../components/Welcome"
import About from "../components/About"
import Brands from "../components/Brands"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Welcome />
    <About />
    <Brands />
    <Contact />
  </Layout>
)

export default IndexPage
