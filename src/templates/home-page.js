import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SliderArea from "../components/SliderArea"
import AboutArea from "../components/AboutArea"
import ToursPopular from "../components/ToursPopular"
import SEO from "../components/SEO/SEO"

import "../assets/css/home-page.css"

export default function Index({ data }) {
  const { fields, frontmatter } = data.homePageQuery
  const pageMeta = {
    title: `Slackpacking, Walks & Cycle Tours`,
    description:
      "SA Adventure Trails is a marketing association between Paul Colvin of Wild Coast Walks and Julia Colvin of Spekboom Tours.",
    slug: fields.slug,
  }
  return (
    <Layout>
      <SEO pageData={pageMeta} pageType="home" />
      <SliderArea slider={frontmatter.slider} />
      <AboutArea aboutArea={frontmatter.aboutarea} />
      <ToursPopular toursArea={frontmatter.toursarea} />
    </Layout>
  )
}

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    homePageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        slider {
          heading1
          heading2
          subheading1
          subheading2
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
              }
            }
          }
        }
        aboutarea {
          heading1
          heading2
          blurb
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 786, layout: CONSTRAINED)
              }
            }
          }
        }
        toursarea {
          heading1
          heading2
          introduction
          section {
            heading1
            heading2
            tours {
              tour {
                id
                fields {
                  slug
                }
                frontmatter {
                  tour_id
                  destination
                  activity
                  duration
                  price
                  shortdescription
                  imagethumbnail {
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 370
                          height: 370
                          layout: CONSTRAINED
                        )
                      }
                    }
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
