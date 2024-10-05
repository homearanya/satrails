// import React from "react";
import { graphql } from "gatsby"
import React, { Component } from "react"

import Banner from "../components/Banner"
import { HTMLContent } from "../components/Content"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"

import dateformat from "dateformat"
import "../assets/css/tour.css"

export default class BlogPost extends Component {
  render() {
    const { BlogPostQuery: blogPost } = this.props.data
    // build image array for schema.org
    let schemaImages = []
    let postImage = undefined
    if (blogPost.frontmatter.imageBanner.image) {
      schemaImages.push(blogPost.frontmatter.imageBanner.image.publicURL)
      postImage = blogPost.frontmatter.imageBanner.image.publicURL
    }
    // Meta Info for SEO and schemaOrg
    const pageMeta = {
      title: `${blogPost.frontmatter.title}`,
      description: `${blogPost.frontmatter.seo.description}`,
      slug: blogPost.fields.slug,
      image: postImage,
      dataPublished: blogPost.frontmatter.date
        ? dateformat(blogPost.frontmatter.date, "dd-mm-yyyy")
        : false,
    }
    if (blogPost.frontmatter.seo) {
      Object.assign(pageMeta, blogPost.frontmatter.seo)
    }
    return (
      <Layout BlogPost>
        <SEO pageData={pageMeta} pageType="post" postImage={postImage} />
        <Banner
          extraClass="details-one"
          title1={blogPost.frontmatter.title}
          title2=""
          text={blogPost.frontmatter.description}
          breadcrumb="post"
          imageBanner={blogPost.frontmatter.imageBanner}
        />

        <div class="section-padding">
          <div class="container">
            <div class="row">
              <div className="col-md-offset-2 col-md-8">
                <div className="row">
                  <div className="trip-info-left-text">
                    <div className="section-title text-center">
                      <div className="title-border form-group">
                        <h1>{blogPost.frontmatter.title}</h1>
                      </div>
                      <div class="text-left">
                        <HTMLContent content={blogPost.html} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export const BlogPostQuery = graphql`
  query BlogPost($id: String!) {
    BlogPostQuery: markdownRemark(id: { eq: $id }) {
      html
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
        imageBanner {
          image {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          alt
        }
        title
        date
        description
      }
    }
  }
`
