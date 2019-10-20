import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import componentStyles from "./articleNavigation.module.css"

const ArticleNavigation = props => {
  return (
    <nav className={componentStyles.articleNavigation}>
      {props.previous && (
        <Link
          className={componentStyles.previous}
          to={props.previous.fields.slug}
          rel="prev"
        >
          {/* ← {props.previous.frontmatter.title} */}
          Previous
        </Link>
      )}
      {props.next && (
        <Link
          className={componentStyles.next}
          to={props.next.fields.slug}
          rel="next"
        >
          {/* {props.next.frontmatter.title} → */}
          Next
        </Link>
      )}
    </nav>
  )
}

ArticleNavigation.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
}

export default ArticleNavigation
