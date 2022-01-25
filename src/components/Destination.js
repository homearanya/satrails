import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Destination = props => {
  return (
    <div className="col-md-6">
      <div className="single-destinations">
        <div className="destinations-image">
          {props.destination.image.image ? (
            props.destination.image.image.childImageSharp ? (
              <GatsbyImage
                image={props.destination.image.image.childImageSharp.gatsbyImageData}
                alt={props.destination.image.alt} />
            ) : (
              <img
                src={props.destination.image.image}
                alt={props.destination.image.alt}
              />
            )
          ) : null}
        </div>
        <div className="destinations-text">
          <h4>
            {props.destination.heading1}{" "}
            <span>{props.destination.heading2}</span>
          </h4>
          {props.destination.content.paragraph.map((paragraph, index) => (
            <p key={index}>{paragraph.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
