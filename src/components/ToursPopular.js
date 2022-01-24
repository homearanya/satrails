import React from "react"
import ToursSection from "../components/ToursSection"

const ToursPopular = (props) => {
  return (
    <div className="best-sell-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  {props.toursArea.heading1}{" "}
                  <span>{props.toursArea.heading2}</span>
                </h1>
              </div>
              <p>{props.toursArea.introduction}</p>
            </div>
          </div>
        </div>
        {props.toursArea.section.map((section, index) => (
          <ToursSection key={index} sectionDetails={section} />
        ))}
      </div>
    </div>
  )
}

export default ToursPopular
