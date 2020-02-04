import React from "react"
import IndentedTextBlock from "../indentedTextBlock"
import Grid from "../grid"
import OutlineButton from "../outlineButton"
import ScrollAnimation from "react-animate-on-scroll"
import componentStyles from "./portfolioItem.module.css"

const PortfolioItem = props => {
  return (
    <div>
      <Grid>
        <div className={componentStyles[props.layout]}>
          <ScrollAnimation animateIn="fade-in-from-left" animateOnce="true">
            <div className={componentStyles[`${props.theme}Thumbnail`]}>
              <img
                className={componentStyles.thumbnailImg}
                src={props.image}
                alt={`${props.heading} screenshot`}
              />
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fade-in-from-bottom" animateOnce="true">
          <IndentedTextBlock
            className={componentStyles[props.layout]}
            heading={props.heading}
          >
            {props.children}
            <OutlineButton url={props.url}>{props.buttonText}</OutlineButton>
          </IndentedTextBlock>
        </ScrollAnimation>
      </Grid>
    </div>
  )
}

/*
PortfolioItem.propTypes = {
  buttonText: PropTypes.string,
}
*/

PortfolioItem.defaultProps = {
  buttonText: "View project",
}

export default PortfolioItem
