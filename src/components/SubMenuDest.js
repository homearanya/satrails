import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SubMenuDest = (props) => {
  return (
    <div>
      <span className="border-hover">
        <div className="mega-image">
          {props.section.image.image ? (
            props.section.image.image.childImageSharp ? (
              <GatsbyImage
                image={
                  props.section.image.image.childImageSharp.gatsbyImageData
                }
                alt={props.section.image.alt}
              />
            ) : (
              <img
                src={props.section.image.image}
                alt={props.section.image.alt}
              />
            )
          ) : null}
        </div>
      </span>
      <span>
        <div className="mega-title">
          <h4>
            {props.section.heading1} <br />
            {props.section.heading2}
          </h4>
        </div>
        {props.section.tours
          .filter((tour) => tour.tour)
          .map((tour, index) => {
            return (
              <Link
                key={index}
                to={tour.tour.fields.slug}
                className="mega-item"
                activeClassName="menu-item-active"
                onClick={props.handleLeave}
              >
                {tour.tour.frontmatter.duration
                  ? tour.tour.frontmatter.tour_id +
                    " (" +
                    tour.tour.frontmatter.duration +
                    ")"
                  : tour.tour.frontmatter.tour_id}
              </Link>
            )
          })}
      </span>
    </div>
  )
}

export default SubMenuDest
