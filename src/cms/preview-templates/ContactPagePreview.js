import React from "react"
import PropTypes from "prop-types"

import Banner from "../../components/Banner"
import { ContactFormTemplate } from "../../templates/contact-page"

const ContactPagePreview = (props) => {
  const { entry, fieldsMetaData } = props
  const data = entry.getIn(["data"]).toJS()

  const contactDetails = fieldsMetaData.getIn([
    "contactDetailsOrigin",
    "contactDetails",
    "contact",
    "contact_details",
  ])
  if (data && contactDetails) {
    const contactDetailsToJS = contactDetails.toJS()
    return (
      <React.Fragment>
        <Banner
          extraClass="contact-banner"
          title1="Contact"
          title2="US"
          text={data.blurb}
          breadcrumb="Contact us"
          imageBanner={data.imageBanner}
        />
        <ContactFormTemplate contact_details={contactDetailsToJS} />
      </React.Fragment>
    )
  } else {
    return <div>Loading...</div>
  }
}
ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
