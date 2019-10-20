import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import PageSection from "../../components/pageSection"
import ArticleHeader from "../../components/articleHeader"
import ArticleNavigation from "../../components/articleNavigation"
import ContentBox from "../../components/contentBox"
import SEO from "../../components/seo"
import componentStyles from "./blogPost.module.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} theme="light">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PageSection colour="blue">
          <article
            className={`article-container ${componentStyles.articleContainer}`}
          >
            <ArticleHeader
              title={post.frontmatter.title}
              date={post.frontmatter.date}
            />
            <ContentBox>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </ContentBox>
            <ArticleNavigation previous={previous} next={next} />
          </article>
        </PageSection>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
