import React from "react"
import PropTypes from "prop-types"

import Banner from "../../components/Banner"
import DestinationsArea from "../../components/DestinationsArea"
import AssociatesArea from "../../components/AssociatesArea"

const AboutPagePreview = (props) => {
  const { entry } = props
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return (
      <React.Fragment>
        <Banner
          extraClass="about-banner"
          title1="About"
          title2="US"
          text={data.banner.blurb}
          breadcrumb="About us"
          imageBanner={data.banner.imageBanner}
        />
        {/* <AboutAdventures /> */}
        <AssociatesArea
          heading1={data.partnersarea.heading1}
          heading2={data.partnersarea.heading2}
          blurb={data.partnersarea.introduction}
          partners={data.partnersarea.partner}
        />
        <DestinationsArea
          heading1={data.destinationsarea.heading1}
          heading2={data.destinationsarea.heading2}
          blurb={data.destinationsarea.introduction}
          destinations={data.destinationsarea.destination}
        />
      </React.Fragment>
    )
  } else {
    return <div>Loading...</div>
  }
}
AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
