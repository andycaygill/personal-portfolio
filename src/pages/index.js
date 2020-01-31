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
// import EtchThemesImage from "../assets/images/etch-themes-screenshot.png"
import TipImage from "../assets/images/tip-screenshot.png"
import GuitarTunerImage from "../assets/images/guitar-tuner-screenshot.png"
import ProfileImage from "../assets/images/profile-picture.jpg"
import SEO from "../components/seo"

const Index = props => {
  //render() {
  const { data } = props
  const [theme, setTheme] = useState("dark")
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle} theme={theme}>
      <SEO title="All posts" />

      <PageSection colour="blue">
        <Grid>
          <ScrollAnimation animateIn="fade-in-from-left" animateOnce={true}>
            <img src={ACImage} alt="AC" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade-in-from-right" animateOnce={true}>
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
            Applio is a platform for landlords and real estate agents to handle
            the entire process of creating tenancy agreements, including payment
            of application fees and online E-Signatures. Built using the
            Meteor.js framework.
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
            Scroll Entrance is a open source JavaScript plugin I developed to
            easily add animations to elements when they are scrolled into view.
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Travel Industry Personnel"
          url="https://travelindustrypersonnel.com/"
          theme="red"
          image={TipImage}
        >
          <p>
            Travel Industry Personnel, based in Toronto, is the largest company
            committed to staffing within the Canadian travel industry. The
            client required a rebrand of their existing website which was over
            10 years old. Work was commissioned to build a fully responsive,
            high performance website which allowed users to search and apply for
            available jobs, integrate social media api as well as ensuring it
            was easy for the company to maintain.
          </p>

          <p>
            For this project, I developed a bespoke WordPress theme and
            implemented a Job Board for applicants to apply for jobs online. Job
            postings are syncronised with Indeed, LinkedIn and Twitter to reach
            as many potential applicants as possible.
          </p>
        </PortfolioItem>
      </PageSection>

      {/* <PageSection colour="white">
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
      </PageSection> */}
      <PageSection colour="white">
        <PortfolioItem
          heading="Guitar Tuner"
          url="#"
          gitUrl="#"
          theme="yellow"
          image={GuitarTunerImage}
          layout="reversed"
        >
          <p>
            Design and development of a Guitar tuner, built using React and the
            Web Audio API.
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="blue">
        <ScrollAnimation animateIn="fade-in-from-bottom">
          <Grid>
            <img src={ProfileImage} alt="Profile Picture" />

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
        {/* <SectionConnector label="latest articles" colour="blue" /> */}
      </PageSection>

      {/* <PageSection colour="blue">
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
      </PageSection> */}
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
