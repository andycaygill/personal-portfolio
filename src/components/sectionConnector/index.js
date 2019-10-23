import React from "react"
import PropTypes from "prop-types"
import componentStyles from "./sectionConnector.module.css"

const SectionConnector = props => (
  <span className={componentStyles[props.colour]}>{props.label}</span>
)

export default SectionConnector
