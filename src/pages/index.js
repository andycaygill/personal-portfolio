import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import LatestArticles from "../components/latestArticles"
import IndentedTextBlock from "../components/indentedTextBlock"
import Grid from "../components/grid"
import OutlineButton from "../components/outlineButton"
import PortfolioItem from "../components/portfolioItem"
import SectionConnector from "../components/sectionConnector"
import ScrollAnimation from "react-animate-on-scroll"

import ACImage from "../assets/images/ac-image.png"
import ScrollEntranceImage from "../assets/images/scroll-entrance-screenshot.png"
import ApplioImage from "../assets/images/applio-screenshot.png"
import EtchThemesImage from "../assets/images/etch-themes-screenshot.png"
import GuitarTunerImage from "../assets/images/guitar-tuner-screenshot.png"
import SEO from "../components/seo"

const Index = props => {
  //render() {
  const { data } = props
  const [theme, setTheme] = useState("dark")
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const updateTheme = (visible, theme) => {
    setTheme("light")
  }

  return (
    <Layout location={props.location} title={siteTitle} theme={theme}>
      <SEO title="All posts" />
      <PageSection colour="blue">
        <Grid>
          <ScrollAnimation animateIn="fade-in-from-left" animateOnce="true">
            <img src={ACImage} alt="AC" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade-in-from-right" animateOnce="true">
            <IndentedTextBlock heading="Hi, I'm Andrew Caygill. Nice to meet you!">
              I’m a Front End Developer from England living in Vancouver, BC. I
              specialise in ultrices ornare purus semper.
            </IndentedTextBlock>
          </ScrollAnimation>
        </Grid>
        <SectionConnector label="projects" colour="white" />
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Applio"
          url="https://applio.co"
          theme="blue"
          image={ApplioImage}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            ipsum nostrum? Magni possimus deserunt maiores in eum! Ex corporis
            iusto quam nostrum dolores animi quos doloribus porro deleniti
            facere. Cum?
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Scroll Entrance Plugin"
          url="#"
          theme="green"
          image={ScrollEntranceImage}
          layout="reversed"
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            ipsum nostrum? Magni possimus deserunt maiores in eum! Ex corporis
            iusto quam nostrum dolores animi quos doloribus porro deleniti
            facere. Cum?
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Etch Themes"
          url="#"
          theme="red"
          image={EtchThemesImage}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            ipsum nostrum? Magni possimus deserunt maiores in eum! Ex corporis
            iusto quam nostrum dolores animi quos doloribus porro deleniti
            facere. Cum?
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Guitar Tuner"
          url="#"
          theme="yellow"
          image={GuitarTunerImage}
          layout="reversed"
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            ipsum nostrum? Magni possimus deserunt maiores in eum! Ex corporis
            iusto quam nostrum dolores animi quos doloribus porro deleniti
            facere. Cum?
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="black">
        <ScrollAnimation
          animateIn="fade-in-from-bottom"
          afterAnimatedIn={() => {
            setTheme("light")
          }}
          afterAnimatedOut={() => {
            setTheme("dark")
          }}
        >
          {/* <ScrollAnimation afterAnimatedOut={setTheme("light")}> */}
          <Grid>
            <div>Icons</div>

            <IndentedTextBlock heading="More than just a developer...">
              <p>
                I'm a front-end developer with 10 years professional experience
                in building efficient, scalable web applications and beautiful
                user experiences. While I enjoy experimenting with new
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
        </ScrollAnimation>
        {/* </ScrollAnimation> */}
        <SectionConnector label="latest articles" colour="blue" />
      </PageSection>
      <PageSection colour="blue">
        <Grid>
          <ScrollAnimation animateIn="fade-in-from-bottom" animateOnce="true">
            <IndentedTextBlock heading="Latest Articles">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                ipsum nostrum? Magni possimus deserunt maiores in eum! Ex
                corporis iusto quam nostrum dolores animi quos doloribus porro
                deleniti facere. Cum?
              </p>
              <OutlineButton url="/blog">view all posts</OutlineButton>
            </IndentedTextBlock>
          </ScrollAnimation>
          <LatestArticles posts={posts} limit={3} />
        </Grid>
      </PageSection>
    </Layout>
  )
  //}
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
