import React from "react"
import { Link } from "gatsby"
import Header from "../header"
import Footer from "../footer"

import "normalize.css/normalize.css"
import "./index.css"

class Layout extends React.Component {
  render() {
    const { location, title, theme, children } = this.props

    /*
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    */

    return (
      <React.Fragment>
        <Header theme={theme} />
        {children}
        <Footer theme={theme} />
      </React.Fragment>
    )
  }
}

export default Layout
