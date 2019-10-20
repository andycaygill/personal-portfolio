import React from "react"
import PropTypes from "prop-types"
import componentStyles from "./contentBox.module.css"

const ContentBox = props => {
  return (
    <div className={`content-box ${componentStyles.contentBox}`}>
      {props.children}
    </div>
  )
}

ContentBox.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
}

export default ContentBox
