import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import IndentedTextBlock from "../components/indentedTextBlock"
import Grid from "../components/grid"
import PortfolioItem from "../components/portfolioItem"
import SectionConnector from "../components/sectionConnector"
import ScrollAnimation from "react-animate-on-scroll"

import ACImage from "../assets/images/ac-image.png"
import ScrollEntranceImage from "../assets/images/scroll-entrance-screenshot.png"
import ApplioImage from "../assets/images/applio-screenshot.png"
import EtchThemesImage from "../assets/images/etch-themes-screenshot.png"
import TipImage from "../assets/images/tip-screenshot.png"
import GuitarTunerImage from "../assets/images/guitar-tuner-screenshot.png"
import ProfileImage from "../assets/images/profile-picture.jpg"
import SEO from "../components/seo"

//import LatestArticles from "../components/latestArticles"
//import OutlineButton from "../components/outlineButton"

const Index = props => {
  //render() {
  const { data } = props
  const [theme, setTheme] = useState("light")
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle} theme={theme}>
      <SEO title="Andrew Caygill Portfolio" />

      <PageSection colour="blue">
        <Grid>
          <ScrollAnimation animateIn="fade-in-from-left" animateOnce={true}>
            <img src={ACImage} alt="AC" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade-in-from-right" animateOnce={true}>
            <IndentedTextBlock heading="Hi, I'm Andrew. Nice to meet you!">
              I’m a Front End Engineer from England living in Vancouver, BC. I
              specialise in building high performing web applications and
              innovative user experiences using modern Javascript, HTML and CSS.
            </IndentedTextBlock>
          </ScrollAnimation>
        </Grid>
        <SectionConnector label="projects" colour="white" />
      </PageSection>

      <PageSection colour="white">
        <PortfolioItem
          heading="Applio"
          url="https://the-lettings-co.applio.co"
          theme="lightBlue"
          image={ApplioImage}
          layout="reversed"
        >
          <p>
            Applio’s end-to-end lettings software lets landlords and agents
            manage the whole pre-tenancy process in one place. By automating
            many of the manual tasks, Applio cuts 70% of the time and creates a
            simple, clear process for tenants to keep track of where they are in
            the process. The platform, which was built using Meteor.js
            framework, allows for real-time updates, payment of application fees
            and online e-signatures.
          </p>

          <p>
            <strong>Demo Staff User</strong>
            <br />
            <strong>Email:</strong> test@applio.co
            <br />
            <strong>Password:</strong> password
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Scroll Entrance Plugin"
          url="https://andycaygill.github.io/scroll-entrance/"
          theme="darkGreen"
          image={ScrollEntranceImage}
        >
          <p>
            Scroll Entrance is a open source JavaScript plugin I developed to
            easily add animations to elements when they are scrolled into view.
            To date the plugin has had over 3000 downloads.
          </p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Travel Industry Personnel"
          url="https://travelindustrypersonnel.com/"
          theme="tip"
          image={TipImage}
          layout="reversed"
        >
          <p>
            Travel Industry Personnel is the largest company committed to
            staffing within the Canadian travel industry. The client required a
            rebrand of their existing website which was over 10 years old. Work
            was commissioned to build a fully responsive, high performance
            website which allowed users to search and apply for available jobs,
            integrate social media api as well as ensuring it was easy for the
            company to maintain.
          </p>
          <p>
            For this project, I developed a bespoke WordPress theme and
            implemented a Job Board for applicants to apply for jobs online. Job
            postings are synchronized with Indeed, LinkedIn and Twitter to reach
            as many potential applicants as possible.
          </p>
        </PortfolioItem>
      </PageSection>

      <PageSection colour="white">
        <PortfolioItem
          heading="Etch Themes"
          url="#"
          theme="etch"
          image={EtchThemesImage}
        >
          <p>
            Beautifully designed, intelligently coded UI design kits for web and
            mobile across a projects entire workflow.
          </p>
          <p>
            Etch was created to solve the problems we had when building
            websites. Some themes looked beautiful, but the code was a mess.
            Some themes were perfectly coded, but looked ugly. We wanted themes
            that did both – clean code and elegant design.
          </p>
          <p>Etch themes is currently in development and built with Gatsby.</p>
        </PortfolioItem>
      </PageSection>
      <PageSection colour="white">
        <PortfolioItem
          heading="Guitar Tuner"
          url="https://sleepy-poitras-04ad71.netlify.com/"
          theme="yellow"
          image={GuitarTunerImage}
          layout="reversed"
        >
          <p>
            Design and development of a guitar tuner, built using React and the
            Web Audio API.
          </p>
        </PortfolioItem>

        <SectionConnector label="about" colour="black" />
      </PageSection>

      <PageSection colour="black">
        <ScrollAnimation animateIn="fade-in-from-bottom">
          <Grid>
            <img src={ProfileImage} alt="Profile Picture" />

            <IndentedTextBlock heading="About me">
              <p>
                I'm a front-end engineer with 8 years professional experience in
                building efficient, scalable web applications and creative user
                experiences. While I enjoy experimenting with new frameworks and
                libraries, I understand the importance of placing focus on the
                end goal: delivering a beautiful, functional product to the user
                and client. For work enquiries or if you just want to say hello,
                email me today at{" "}
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
