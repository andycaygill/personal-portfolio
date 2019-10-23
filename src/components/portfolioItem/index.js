import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IndentedTextBlock from "../indentedTextBlock"
import Grid from "../grid"
import OutlineButton from "../outlineButton"
import componentStyles from "./portfolioItem.module.css"

const PortfolioItem = props => {
  return (
    <div>
      <Grid>
        <div className={componentStyles[props.layout]}>
          <div className={componentStyles[`${props.theme}Thumbnail`]}>
            <img
              className={componentStyles.thumbnailImg}
              src={props.image}
              alt={`${props.heading} screenshot`}
            />
          </div>
        </div>
        <IndentedTextBlock
          className={componentStyles[props.layout]}
          heading={props.heading}
        >
          {props.children}
          <OutlineButton url={props.url}>View Project</OutlineButton>
        </IndentedTextBlock>
      </Grid>
    </div>
  )
}

/*
ArticleList.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
}
*/
export default PortfolioItem
