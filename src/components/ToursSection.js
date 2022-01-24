import React from "react"
import TourThumbnail from "../components/TourThumbnail"

const ToursSection = (props) => {
  const tours = props.sectionDetails.tours
  return (
    <div className="row">
      <div className="section-title text-center">
        <h2>
          {props.sectionDetails.heading1}{" "}
          <span>{props.sectionDetails.heading2}</span>
        </h2>
      </div>
      {tours
        .filter((tour) => tour?.tour)
        .map((tour) => {
          return <TourThumbnail key={tour.tour.id} tourDetails={tour.tour} />
        })}
    </div>
  )
}

export default ToursSection
