/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/bootstrap.min.css"
import "../styles/animate.min.css"
import "../styles/fontawesome-all.min.css"
import "../styles/themify-icons.css"
import "../styles/main.css"
import "../styles/menu.css"

import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="App">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main id="page-wrap">{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
