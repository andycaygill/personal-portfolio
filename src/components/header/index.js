import React from "react"
import { Link } from "gatsby"
import Logo from "..//logo"
import Navigation from "..//navigation"
import componentStyles from "./header.module.css"

const Header = () => {
  return (
    <header className={`site-header ${componentStyles.siteHeader}`}>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
