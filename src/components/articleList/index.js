import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Card from "..//card"
import componentStyles from "./articleList.module.css"

const ArticleList = props => {
  return (
    <div className={componentStyles.articleListContainer}>
      <h1>{props.heading}</h1>
      <div className={componentStyles.articleList}>
        {props.posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              className={componentStyles.articleListItem}
              key={node.fields.slug}
            >
              <Card url={node.fields.slug}>
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section> */}
              </Card>
            </article>
          )
        })}
      </div>
    </div>
  )
}

/*
ArticleList.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
}
*/
export default ArticleList
