import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import dateformat from "dateformat"

const BlogPostCard = ({ post }) => {
  const { slug, title, date, description, imageThumbnail } = post
  let imageFluid = ""
  let imageAlt = ""
  if (imageThumbnail.image) {
    imageFluid = imageThumbnail.image.childImageSharp
      ? imageThumbnail.image.childImageSharp.gatsbyImageData
      : imageThumbnail.image
    imageAlt = imageThumbnail.alt
  }
  return (
    <div className="col-md-12">
      <div className="single-list-item">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="adventure-img">
              <Link to={slug}>
                {typeof imageFluid === "string" ? (
                  <div className="custom-preview">
                    <img src={imageFluid} alt={imageAlt} />
                  </div>
                ) : (
                  <GatsbyImage image={imageFluid} alt={imageAlt} />
                )}
              </Link>
            </div>
          </div>
          <div className="col-md-8 col-sm-6 margin-left-list">
            <div className="adventure-list-container">
              <div className="adventure-list-text adventure-list-text--post-card">
                <span>{dateformat(date, "dd mmm yyyy")}</span>
                <h1>
                  <Link to={slug}>{title}</Link>
                </h1>
                <p>
                  {description.length > 215
                    ? description.substring(0, 212) + "..."
                    : description}
                </p>
                <div className="list-buttons">
                  <Link to={slug} className="button-one button-blue">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
