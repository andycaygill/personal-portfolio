import React from "react"
import PropTypes from "prop-types"
import componentStyles from "./articleHeader.module.css"

const ArticleHeader = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
    </header>
  )
}

ArticleHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
}

export default ArticleHeader
