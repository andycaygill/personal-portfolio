import React from "react"
import PropTypes from "prop-types"

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
