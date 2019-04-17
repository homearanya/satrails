import React from "react";
import Img from "gatsby-image";

const Slide = props => {
  return (
    <div>
      {typeof props.imageFluid === "string" ? (
        <img
          src={props.imageFluid}
          alt={props.imageAlt}
          title={props.imageTitle}
        />
      ) : (
        <Img
          fluid={props.imageFluid}
          alt={props.imageAlt}
          title={props.imageTitle}
        />
      )}
      <div className="nivo-caption" style={{ display: "block" }}>
        <div className="banner-content slider-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h1 className="title1">
                    {props.heading1} {props.heading2}
                  </h1>
                  <h2 className="sub-title">{props.subheading1}</h2>
                  <h2 className="sub-title">
                    <span>{props.subheading2}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
