import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BlogPostCard from "./BlogPostCard"

export const BlogPosts = ({ data }) => {
  const bloglist = data.allMarkdownRemark.edges.map(({ node }) => node)
  return (
    <div className="tour-calendar adventures-grid section-padding list">
      <div className="container">
        <div className="row">
          <div>
            {bloglist.map((post) => {
              const { fields, frontmatter, id } = post
              return (
                <BlogPostCard key={id} post={{ ...frontmatter, ...fields }} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogList = () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogListQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  date
                  imageThumbnail {
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 370
                          height: 294
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
      `}
      render={(data) => <BlogPosts data={data} />}
    />
  )
}

export default BlogList
