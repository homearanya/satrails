import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Associate = props => {
  return (
    <div className="col-md-6">
      <div className="single-associate">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <div className="associate-image">
              {props.partner.image.image ? (
                props.partner.image.image.childImageSharp ? (
                  <GatsbyImage
                    image={props.partner.image.image.childImageSharp.gatsbyImageData}
                    alt={props.partner.image.alt} />
                ) : (
                  <img
                    src={props.partner.image.image}
                    alt={props.partner.image.alt}
                  />
                )
              ) : null}
            </div>
          </div>
          <div className="col-md-9 col-sm-8 margin-left">
            <div className="associate-text">
              <h2>
                {props.partner.heading1} <span>{props.partner.heading2}</span>
              </h2>
              {props.partner.content.paragraph.map((paragraph, index) => (
                <p key={index}>{paragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associate;
