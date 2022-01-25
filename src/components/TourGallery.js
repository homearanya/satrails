import React from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

function convertPhotos(photos, photoGalleryObject) {
  return photos
    .filter((photo) => photo.image)
    .map((photo, index) => {
      return photo.image
        ? photo.image.childImageSharp
          ? {
              src: photo.image.childImageSharp.fluid.src,
              srcSet: photo.image.childImageSharp.fluid.srcSet,
              sizes: photo.image.childImageSharp.fluid.sizes,
              width: photo.image.childImageSharp.fluid.aspectRatio,
              height: 1,
              alt: photo.alt,
              key: index,
            }
          : {
              src: photo.image,
              width: photoGalleryObject
                ? photoGalleryObject[photo.image]
                  ? photoGalleryObject[photo.image]
                  : 1
                : 1,
              height: 1,
              alt: photo.alt,
            }
        : null
    })
}

function convertImages(photos) {
  return photos
    .filter((photo) => photo.image)
    .map((photo, index) => {
      let photoCaption = ""
      if (photo.caption && photo.caption.length > 0) {
        photoCaption = photo.caption
      } else {
        photoCaption = photo.alt
      }
      return photo.image
        ? photo.image.childImageSharp
          ? {
              src: photo.image.childImageSharp.fluid.src,
              srcSet: photo.image.childImageSharp.fluid.srcSet,
              alt: photo.alt,
              caption: photoCaption,
            }
          : {
              src: photo.image,
              alt: photo.alt,
              caption: photoCaption,
            }
        : null
    })
}

export default class TourGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  render() {
    const photos = convertPhotos(
      this.props.photos,
      this.props.photoGalleryObject
    )
    const images = convertImages(this.props.photos)
    return (
      <div>
        <Gallery photos={photos} columns={3} onClick={this.openLightbox} />
        <ModalGateway>
          {this.state.lightboxIsOpen && (
            <Modal onClose={this.closeLightbox}>
              <Carousel views={images} currentIndex={this.state.currentImage} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    )
  }
}
