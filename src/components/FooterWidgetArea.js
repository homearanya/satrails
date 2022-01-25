import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { getSrc } from "gatsby-plugin-image"

import NewsletterForm from "./NewsletterForm"
import ContactDetails from "./ContactDetails"

const FooterLinksWrapper = styled.div`
  text-align: center;

  a {
    color: white;
    border-color: white;
  }

  a:hover {
    color: #0967b9;
    border-color: #0967b9;
  }
`

export default function FooterWidgetArea() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          FooterDetails: file(relativePath: { eq: "footer.md" }) {
            childMarkdownRemark {
              frontmatter {
                image {
                  image {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                  alt
                }
                newsletterarea {
                  heading1
                  heading2
                  blurb
                }
              }
            }
          }
          ContactDetails: file(
            relativePath: { eq: "contact-details/contact.md" }
          ) {
            childMarkdownRemark {
              frontmatter {
                contact_details {
                  email
                  phone {
                    phonedisplay
                    phonenumber
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const { image: backgroundImage } =
          data.FooterDetails.childMarkdownRemark.frontmatter.image
        // const {
        //   contact-details
        // } = data.ContactDetails.childMarkdownRemark.frontmatter;
        const { newsletterarea } =
          data.FooterDetails.childMarkdownRemark.frontmatter
        return (
          <div
            className="footer-widget-area"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backgroundImage: backgroundImage
                ? backgroundImage.childImageSharp
                  ? `url(${getSrc(
                      backgroundImage.childImageSharp.gatsbyImageData
                    )})`
                  : `url(${backgroundImage})`
                : "",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundPosition: "center top",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row">
                {/* <FooterContactDetails contactDetails={contact-details} /> */}
                <ContactDetails />
                <NewsletterForm newsletterArea={newsletterarea} />
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <FooterLinksWrapper className="footer-link">
                    <a
                      href="https://www.facebook.com/SAHikingTrails/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Go to Facebook Page"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </FooterLinksWrapper>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
