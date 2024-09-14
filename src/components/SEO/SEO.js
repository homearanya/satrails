import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import SchemaOrg from "./SchemaOrg"

const SEO = ({ pageData, postImage, pageType }) => (
  <StaticQuery
    query={graphql`
      {
        SEOQuery: site {
          siteMetadata {
            title
            defaultTitle
            description
            canonicalUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
          }
        }
        PhoneDetailsQuery: file(
          relativePath: { eq: "contact-details/contact.md" }
        ) {
          childMarkdownRemark {
            frontmatter {
              contact_details {
                phone {
                  phonedisplay
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      // data for SEO & schemaOrg
      const { siteMetadata: seo } = data.SEOQuery
      // data for organization schemaOrg
      let organization = seo.organization
      organization.phone =
        data.PhoneDetailsQuery.childMarkdownRemark.frontmatter.contact_details.phone.phonedisplay
      const pageMeta = pageData || {}

      const metaTitle = pageMeta.title || seo.title
      const metaDescription =
        pageMeta.description || pageData.excerpt || seo.description
      const url = pageMeta.slug
        ? `${seo.canonicalUrl}${pageMeta.slug}`
        : seo.canonicalUrl
      // tour data for schemaOrg
      let tour = {}
      if (pageType === "tour") {
        tour.name = pageMeta.tourName
        tour.description = pageMeta.description
        tour.images = pageMeta.tourImages
        tour.price = pageMeta.tourPrice
        tour.url = `${seo.canonicalUrl}${pageMeta.slug}`
      }
      // post data for schemaOrg
      let post = {}
      if (pageType === "post") {
        post.name = pageMeta.name
        post.alternateName = seo.defaultTitle
        post.description = pageMeta.description
        post.image = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image
        post.dataPublished = pageMeta.datePublished
        post.url = `${seo.canonicalUrl}${pageMeta.slug}`
        post.author = seo.author
      }

      // Meta image
      let metaImage = pageMeta.image || seo.image
      if (pageType === "post") {
        metaImage = postImage
          ? `${seo.canonicalUrl}${postImage}`
          : pageMeta.image || seo.image
      } else if (pageType === "tour") {
        metaImage =
          pageMeta.tourImages.length > 0
            ? `${seo.canonicalUrl}/img${pageMeta.tourImages[0]}`
            : pageMeta.image || seo.image
      }
      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={metaImage} />

            {/* Establish canonical url */}
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {pageType === "post" ? (
              <meta property="og:type" content="article" />
            ) : (
              <meta property="og:type" content="website" />
            )}
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} /> */}
          </Helmet>
          <SchemaOrg
            pageType={pageType}
            canonicalUrl={seo.canonicalUrl}
            organization={organization}
            tour={tour}
            post={post}
          />
        </React.Fragment>
      )
    }}
  />
)

export default SEO
