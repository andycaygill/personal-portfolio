import React from "react"
import { Link } from "gatsby"
import Logo from "..//logo"
import Navigation from "..//navigation"
import componentStyles from "./header.module.css"

const Header = props => {
  return (
    <header className={`site-header ${componentStyles[props.theme]}`}>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
