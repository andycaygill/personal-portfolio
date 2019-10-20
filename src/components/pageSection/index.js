import React from "react"
import PropTypes from "prop-types"
import Container from "..//container"
import componentStyles from "./pageSection.module.css"

const PageSection = props => {
  return (
    <div className={componentStyles[props.colour]}>
      <Container>{props.children}</Container>
    </div>
  )
}

PageSection.propTypes = {
  colour: PropTypes.string,
}

PageSection.defaultProps = {
  colour: "white",
}

export default PageSection
