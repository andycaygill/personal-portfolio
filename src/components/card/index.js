import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import componentStyles from "./card.module.css"

const Card = props => {
  return (
    <div className={componentStyles.card}>
      {props.url && (
        <Link className={componentStyles.arrowButton} to={props.url}>
          →
        </Link>
      )}
      {props.children}
    </div>
  )
}

export default Card
