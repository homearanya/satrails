// import React from "react";
import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO/SEO"
import TourInformation from "../components/TourInformation"
import TourUpcomingEvents from "../components/TourUpcomingEvents"
import { HTMLContent } from "../components/Content"

import "../assets/css/tour.css"

export default class TourPage extends Component {
  render() {
    const { TourPageQuery: tourInfo } = this.props.data
    // build image array for schema.org
    let schemaImages = []
    if (tourInfo.frontmatter.imagebanner.image) {
      schemaImages.push(tourInfo.frontmatter.imagebanner.image.relativePath)
    }
    if (tourInfo.frontmatter.photoGallery) {
      tourInfo.frontmatter.photoGallery.photo.map((photo) => {
        if (photo.image) {
          schemaImages.push(photo.image.relativePath)
        }
      })
    }
    //
    const { frontmatter: upcomingEventsInfo } =
      this.props.data.UpcomingEventsHeadingQuery.childMarkdownRemark
    // Meta Info for SEO and schemaOrg
    const pageMeta = {
      title: `${tourInfo.frontmatter.tour_id} · ${tourInfo.frontmatter.destination} · ${tourInfo.frontmatter.activity} · Tours`,
      description: `${tourInfo.frontmatter.shortdescription}`,
      slug: tourInfo.fields.slug,
      tourName: tourInfo.frontmatter.tour_id,
      tourPrice: tourInfo.frontmatter.price,
      tourImages: schemaImages,
      datePublished: false,
    }
    if (tourInfo.frontmatter.seo) {
      Object.assign(pageMeta, tourInfo.frontmatter.seo)
    }
    return (
      <Layout tourPage>
        <SEO pageData={pageMeta} pageType="tour" />
        <Banner
          extraClass="details-one"
          title1={tourInfo.frontmatter.tour_id}
          title2=""
          text={tourInfo.frontmatter.bannerblurb}
          breadcrumb="tour"
          imageBanner={tourInfo.frontmatter.imagebanner}
        />

        <TourInformation tourInfo={tourInfo} contentComponent={HTMLContent} />
        {tourInfo.fields.tourevents && tourInfo.fields.tourevents.length > 0 ? (
          <TourUpcomingEvents
            backgroundImage={tourInfo.frontmatter.backgroundimage}
            upcomingEventsInfo={upcomingEventsInfo}
            tourEvents={tourInfo.fields.tourevents}
            tour={tourInfo.frontmatter.tour_id}
          />
        ) : null}
      </Layout>
    )
  }
}
export const tourPageQuery = graphql`
  query TourPage($id: String!) {
    TourPageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
        tourevents {
          frontmatter {
            date
          }
        }
      }
      html
      frontmatter {
        tour_id
        destination
        activity
        duration
        price
        bannerblurb
        shortdescription
        imagebanner {
          image {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          alt
        }
        photoGallery {
          photo {
            alt
            caption
            image {
              relativePath
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
    UpcomingEventsHeadingQuery: file(
      relativePath: { eq: "upcoming-events.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          heading1
          heading2
          blurb
        }
      }
    }
  }
`
