import React from "react"
import componentStyles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={componentStyles.siteFooter}>
      &copy; Andrew Caygill {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
