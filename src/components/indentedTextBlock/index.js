import React from "react"
import PropTypes from "prop-types"
import componentStyles from "./indentedTextBlock.module.css"

const IndentedTextBlock = props => {
  return (
    <div>
      <h1 className={componentStyles.heading}>{props.heading}</h1>
      <div className={componentStyles.content}>{props.children}</div>
    </div>
  )
}

/*
ArticleList.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
}
*/
export default IndentedTextBlock
