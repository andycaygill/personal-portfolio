import React from "react"
import PropTypes from "prop-types"
import Container from "..//container"
import componentStyles from "./pageSection.module.css"
import { useInView } from "react-intersection-observer"

const PageSection = props => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  return (
    <div
      ref={ref}
      className={`${componentStyles[props.colour]}
      ${inView ? "is-in-view" : ""}`}
    >
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
