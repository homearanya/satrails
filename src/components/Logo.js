import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Logo = props => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="logo">
        <div className="logo-white">
          <Link to="/">
            {props.logos.whitelogo.image ? (
              props.logos.whitelogo.image.childImageSharp ? (
                <GatsbyImage
                  image={props.logos.whitelogo.image.childImageSharp.gatsbyImageData}
                  alt={props.logos.whitelogo.alt} />
              ) : (
                <img
                  src={props.logos.whitelogo.image}
                  alt={props.logos.whitelogo.alt}
                />
              )
            ) : null}
          </Link>
        </div>
        <div className="logo-color">
          <Link to="/">
            {props.logos.colorlogo.image ? (
              props.logos.colorlogo.image.childImageSharp ? (
                <GatsbyImage
                  image={props.logos.colorlogo.image.childImageSharp.gatsbyImageData}
                  alt={props.logos.colorlogo.alt} />
              ) : (
                <img
                  src={props.logos.colorlogo.image}
                  alt={props.logos.colorlogo.alt}
                />
              )
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
