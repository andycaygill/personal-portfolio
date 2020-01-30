import React from "react"
import componentStyles from "./logo.module.css"
import LogoImage from "../../assets/images/logo.svg"

const Logo = props => {
  return (
    <div className={componentStyles[props.theme]}>
      <img className={componentStyles.logoImg} src={LogoImage} alt="AC" />
      <p className={componentStyles.logoText}>Andrew Caygill</p>
    </div>
  )
}

export default Logo
