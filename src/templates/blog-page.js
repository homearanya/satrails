import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO/SEO"

import "../assets/css/tourCalendar.css"
import BlogList from "../components/BlogList"

export default ({ data }) => {
  const { fields, frontmatter } = data.markdownRemark

  const pageMeta = {
    title: `Trails Blog - Hiking Guides, Outdoor Tips & Adventure Gear · Slackpacking & Cycle Tours`,
    description: `Explore the best hiking and outdoor adventures in South Africa with expert tips, trail guides, and gear recommendations on the Trails blog. Your gateway to nature starts here!`,
    slug: fields.slug,
    datePublished: false,
  }
  if (frontmatter.seo) {
    Object.assign(pageMeta, frontmatter.seo)
  }
  return (
    <Layout>
      <SEO pageData={pageMeta} />
      <Banner
        extraClass="grid"
        title1=""
        title2="Trails Blog - Hiking Guides, Outdoor Tips & Adventure Gear"
        text={frontmatter.blurb}
        breadcrumb="Blog"
        imageBanner={frontmatter.imageBanner}
      />
      <BlogList />
    </Layout>
  )
}
export const CalendarPageQuery = graphql`
  query CalendarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        seo {
          title
          description
          image {
            image {
              publicURL
            }
            alt
          }
        }
        blurb
        imageBanner {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          alt
        }
      }
    }
  }
`
