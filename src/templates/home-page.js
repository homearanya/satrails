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
                fluid(maxWidth: 1600, maxHeight: 750) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
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
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
                        fluid(maxWidth: 370, maxHeight: 370) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
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
