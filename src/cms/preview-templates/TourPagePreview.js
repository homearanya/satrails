import React, { Component } from "react"
import PropTypes from "prop-types"

import Banner from "../../components/Banner"
import TourInformation from "../../components/TourInformation"

const DummyPhotoGallery = ({ handleLoadedImages, photoGallery }) => (
  <div
    style={{
      display: "none",
    }}
  >
    {photoGallery.photo.map((photo) =>
      photo.image ? (
        <img
          onLoad={(event) =>
            handleLoadedImages(
              photo.image,
              event.target.width,
              event.target.height
            )
          }
          src={photo.image}
          alt="alt text"
        />
      ) : null
    )}
  </div>
)

export default class TourPagePreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoGalleryObject: {},
    }
  }

  handleLoadedImages = (src, width, height) => {
    if (!this.state.photoGalleryObject[src]) {
      if (height > 0 && width > 0) {
        const imageAspect = Math.round((width / height) * 1000) / 1000
        this.setState(
          (prevState) => (prevState.photoGalleryObject[src] = imageAspect)
        )
      }
    }
  }

  render() {
    const { entry, widgetFor } = this.props
    const data = entry.getIn(["data"]).toJS()
    if (data) {
      return (
        <React.Fragment>
          <Banner
            title1={data.tour_id}
            title2=""
            text={data.bannerblurb}
            breadcrumb="tour"
            imageBanner={data.imageBanner}
          />
          <TourInformation
            tourInfo={{
              html: widgetFor("body"),
              frontmatter: data,
            }}
            photoGalleryObject={this.state.photoGalleryObject}
          />
          <DummyPhotoGallery
            handleLoadedImages={this.handleLoadedImages}
            photoGallery={data.photoGallery}
          />
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

TourPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
