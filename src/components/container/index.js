import React from "react"
import componentStyles from "./container.module.css"

const Container = props => {
  return <div className={componentStyles.container}>{props.children}</div>
}

export default Container
