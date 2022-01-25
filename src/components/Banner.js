import React from "react"
import { Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

export default function Banner(props) {
  let imageURL = ""
  if (props.imageBanner.image) {
    imageURL = props.imageBanner.image.childImageSharp
      ? getSrc(props.imageBanner.image.childImageSharp.gatsbyImageData)
      : props.imageBanner.image
  }
  return (
    <div
      className={"banner-area " + props.extraClass}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        backgroundImage: `url(${imageURL})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  {props.title1} <span>{props.title2}</span>
                </h1>
              </div>
              <p className="text-white">{props.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{props.breadcrumb}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
