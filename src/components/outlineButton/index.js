import React from "react"
import componentStyles from "./outlineButton.module.css"

const OutlineButton = props => (
  <a href={props.url} target="_blank" className={componentStyles.outlineButton}>
    {props.children}
  </a>
)

export default OutlineButton
