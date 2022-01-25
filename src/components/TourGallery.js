import React from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { getSrc, getSrcSet } from "gatsby-plugin-image"

function convertPhotos(photos, photoGalleryObject) {
  return photos
    .filter((photo) => photo.image)
    .map((photo, index) => {
      console.log({ photo }, photo.image.childImageSharp)
      if (photo?.image) {
        if (photo.image.childImageSharp) {
          const src = getSrc(photo.image.childImageSharp.gatsbyImageData)
          const srcSet = getSrcSet(photo.image.childImageSharp.gatsbyImageData)
          const sizes =
            photo.image.childImageSharp.gatsbyImageData.images.fallback.sizes
          const width =
            photo.image.childImageSharp.gatsbyImageData.width /
            photo.image.childImageSharp.gatsbyImageData.height
          const height = 1
          const processedPhoto = {
            src,
            srcSet,
            sizes,
            width,
            height,
            alt: photo.alt,
            key: src,
          }
          return processedPhoto
        } else {
          return {
            src: photo.image,
            width: photoGalleryObject
              ? photoGalleryObject[photo.image]
                ? photoGalleryObject[photo.image]
                : 1
              : 1,
            height: 1,
            alt: photo.alt,
          }
        }
      }
      return null
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
              src: getSrc(photo.image.childImageSharp.gatsbyImageData),
              srcSet: getSrcSet(photo.image.childImageSharp.gatsbyImageData),
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
    console.log({ photos })
    const photosCopy = JSON.parse(JSON.stringify(photos))
    return (
      <div>
        <Gallery photos={photosCopy} columns={3} onClick={this.openLightbox} />
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
