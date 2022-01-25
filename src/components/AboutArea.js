import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutArea = props => {
  return (
    <div className="about-area section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hidden-sm hidden-xs">
            {props.aboutArea.image.image ? (
              props.aboutArea.image.image.childImageSharp ? (
                <GatsbyImage
                  image={props.aboutArea.image.image.childImageSharp.gatsbyImageData}
                  alt={props.aboutArea.image.alt} />
              ) : (
                <img
                  src={props.aboutArea.image.image}
                  alt={props.aboutArea.image.alt}
                />
              )
            ) : null}
          </div>
          <div className="col-md-6">
            <div className="about-container">
              <div className="section-title">
                <div className="title-border">
                  <h1>
                    {props.aboutArea.heading1}{" "}
                    <span>{props.aboutArea.heading2}</span>
                  </h1>
                </div>
              </div>
              <div className="about-text">
                <p>{props.aboutArea.blurb}</p>
                <Link to="/about">More About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
