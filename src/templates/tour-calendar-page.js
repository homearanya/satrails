import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO/SEO"

import "../assets/css/tourCalendar.css"
import UpcomingEvents from "../components/UpcomingEvents"

export default ({ data }) => {
  const { fields, frontmatter } = data.markdownRemark

  const pageMeta = {
    title: `Tour Calendar · Slackpacking & Cycle Tours`,
    description: `Find your tour. If the dates don't suit you we can still organise it for you`,
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
        title1="Tour"
        title2="Calendar"
        text={frontmatter.blurb}
        breadcrumb="Calendar"
        imageBanner={frontmatter.imagebanner}
      />
      <UpcomingEvents />
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
        blurb
        imagebanner {
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
