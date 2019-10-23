import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Card from "../card"
import componentStyles from "./latestArticles.module.css"

const LatestArticles = props => {
  return (
    <div className={componentStyles.articleList}>
      {props.posts.slice(0, props.limit).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <Card url={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </Card>
          </article>
        )
      })}
    </div>
  )
}

/*
ArticleList.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
}
*/
export default LatestArticles
