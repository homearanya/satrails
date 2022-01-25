import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import dateformat from "dateformat";

import BookButton from "../components/BookButton";

const Event = ({ eventInfo }) => {
  const { date: eventDate, tour } = eventInfo;
  const { fields, frontmatter: tourInfo } = tour;
  let imageFluid = "";
  let imageAlt = "";
  if (tourInfo.imagethumbnail.image) {
    imageFluid = tourInfo.imagethumbnail.image.childImageSharp
      ? tourInfo.imagethumbnail.image.childImageSharp.gatsbyImageData
      : tourInfo.imagethumbnail.image;
    imageAlt = tourInfo.imagethumbnail.alt;
  }
  return (
    <div className="col-md-12">
      <div className="single-list-item">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="adventure-img">
              <Link to={fields.slug}>
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
              <div className="adventure-list-image">
                <h2>
                  {dateformat(eventDate, "mmm")}
                  <br />
                  {dateformat(eventDate, "dd")}
                </h2>
                <ul>
                  <li>
                    <h3>{tourInfo.destination}</h3>
                  </li>
                  <li>
                    <h3>{tourInfo.activity}</h3>
                  </li>
                </ul>
              </div>
              <div className="adventure-list-text">
                <h1>
                  <Link to={fields.slug}>{`${tourInfo.tour_id} / ${
                    tourInfo.duration
                  } Trip`}</Link>
                </h1>
                <h2>
                  <span className="persons">From </span>
                  {tourInfo.price}
                  {/* <span className="light">/</span> */}
                  <span className="persons"> per person</span>
                </h2>
                <p>
                  {tourInfo.shortdescription.length > 215
                    ? tourInfo.shortdescription.substring(0, 212) + "..."
                    : tourInfo.shortdescription}
                </p>
                <div className="list-buttons">
                  <Link to={fields.slug} className="button-one button-blue">
                    More Info
                  </Link>
                  <div className="trip-booking-info">
                    <BookButton
                      text="Book this trip"
                      tour={tourInfo.tour_id}
                      date={dateformat(eventDate, "dd mmm yyyy")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
