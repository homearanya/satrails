import React from "react"
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import styled from "styled-components"

import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout"

import "../assets/css/404.css"

const Wrapper = styled.div`
  background: #edecec url(${(props) => props.backgroundImage}) no-repeat scroll
    right top / 50% 100%;
  padding-bottom: 107px;
  padding-top: 250px;

  @media (min-width: 1920px) {
    background-size: 48.5% 100%;
    padding-bottom: 127px;
    padding-top: 206px;
  }
  @media (min-width: 992px) and (max-width: 1169px) {
    background-size: 51% 100%;
    padding-bottom: 85px;
    padding-top: 140px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 80px;
    padding-top: 65px;
  }

  @media (max-width: 767px) {
    background: rgba(33, 34, 39, 0.15) none repeat scroll 0 0;
    padding-bottom: 80px;
    padding-top: 65px;
  }
`

export default ({ data }) => {
  const { backgroundimage } = data.NotFoundQuery.frontmatter
  const pageMeta = {
    title: `Page Not Found . Slackpacking, Walks & Cycle Tours`,
    description: `Page not found. Go back to home page`,
    slug: "/404/",
    datePublished: false,
  }
  return (
    <Layout>
      <SEO pageData={pageMeta} />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Wrapper
        className="error-area"
        backgroundImage={
          backgroundimage.image
            ? backgroundimage.image.childImageSharp
              ? getSrc(backgroundimage.image.childImageSharp.gatsbyImageData)
              : backgroundimage.image
            : ""
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="error-text-container">
                <h1>Oops...</h1>
                <h2>Page Not Found!</h2>
                <p>
                  Sorry the Page Could not be Found here.
                  <br />
                  Try using the button below to go to main page
                  <br />
                  of the site
                </p>
                <Link to="/">Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const notFoundPageQuery = graphql`
  query NotFoundPage {
    NotFoundQuery: markdownRemark(fields: { slug: { eq: "/notfound/" } }) {
      frontmatter {
        backgroundimage {
          image {
            childImageSharp {
              gatsbyImageData(width: 785, layout: CONSTRAINED)
            }
          }
          alt
        }
      }
    }
  }
`
