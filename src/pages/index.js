import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import LatestArticles from "../components/latestArticles"
import IndentedTextBlock from "../components/indentedTextBlock"
import Grid from "../components/grid"
import ACImage from "../assets/images/ac-image.png"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} theme="light">
        <SEO title="All posts" />
        <PageSection colour="blue">
          <Grid>
            <img src={ACImage} alt="AC" />
            <IndentedTextBlock heading="Hi, I'm Andrew Caygill. Nice to meet you!">
              I’m a Front End Developer from England living in Vancouver, BC. I
              specialise in ultrices ornare purus semper.
            </IndentedTextBlock>
          </Grid>
        </PageSection>
        <PageSection colour="white">
          <Grid>
            <div>image</div>
            <IndentedTextBlock heading="Portfolio Item 1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              ipsum nostrum? Magni possimus deserunt maiores in eum! Ex corporis
              iusto quam nostrum dolores animi quos doloribus porro deleniti
              facere. Cum?
            </IndentedTextBlock>
          </Grid>
        </PageSection>
        <PageSection colour="black">
          <Grid>
            <div>Icons</div>
            <IndentedTextBlock heading="More than just a developer...">
              <p>
                I'm a keen front-end developer with 10 years professional
                experience in building efficient, scalable web applications and
                beautiful user experiences. While I enjoy experimenting with new
                frameworks and libraries, I understand the importance of placing
                focus on the end goal: delivering a beautiful, functional
                product to the user/client.
              </p>

              <p>
                For work enquiries or if you just want to say hello, email me
                today at{" "}
                <a href="mailto:hello@andrewcaygill.com">
                  hello@andrewcaygill.com
                </a>
                .
              </p>
            </IndentedTextBlock>
          </Grid>
        </PageSection>
        <PageSection colour="blue">
          <Grid>
            <IndentedTextBlock heading="Latest Articles">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              ipsum nostrum? Magni possimus deserunt maiores in eum! Ex corporis
              iusto quam nostrum dolores animi quos doloribus porro deleniti
              facere. Cum?
            </IndentedTextBlock>
            <LatestArticles posts={posts} limit={3} />
          </Grid>
        </PageSection>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
