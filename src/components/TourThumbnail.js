import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { textTruncate } from "../utils/helpers"
import useMediaQuery from "../utils/hooks/useMediaQuery"

const TourThumbnail = (props) => {
  const isLessThan480 = useMediaQuery("(max-width: 479px)")
  if (!props.tourDetails) {
    return null
  }
  const tourSlug = props.tourDetails.fields.slug
  const tourDetails = props.tourDetails.frontmatter

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="single-adventure">
        {tourDetails.imageThumbnail?.image ? (
          tourDetails.imageThumbnail.image.childImageSharp ? (
            <GatsbyImage
              image={
                tourDetails.imageThumbnail.image.childImageSharp.gatsbyImageData
              }
              alt={tourDetails.imageThumbnail.alt}
            />
          ) : (
            <img
              src={tourDetails.imageThumbnail.image}
              alt={tourDetails.imageThumbnail.alt}
            />
          )
        ) : null}
        <div className="adventure-text effect-bottom">
          <div className="transparent-overlay">
            <h4>
              {tourDetails.tour_id} | <span>{tourDetails.destination}</span>
            </h4>
            <span className="trip-time">
              <i className="fa fa-clock-o" />
              {tourDetails.duration}
            </span>
            <p>
              {textTruncate(
                tourDetails.shortdescription,
                isLessThan480 ? 150 : 230
              )}
            </p>
          </div>
          <div className="adventure-price-link">
            <div class="adventure-price">
              <div className="trip-person">
                From <span>{tourDetails.price}</span> per person
              </div>
            </div>
            <Link className="adventure-link" to={tourSlug}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourThumbnail
