import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import componentStyles from "./outlineButton.module.css"

const OutlineButton = props => (
  <Link to={props.url} className={componentStyles.outlineButton}>
    {props.children}
  </Link>
)

export default OutlineButton
