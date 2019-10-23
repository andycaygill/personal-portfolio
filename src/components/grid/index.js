import React from "react"
import PropTypes from "prop-types"
import componentStyles from "./grid.module.css"

const Grid = props => {
  return <div className={componentStyles.grid}>{props.children}</div>
}

export default Grid
