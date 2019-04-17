import React from "react";
import PropTypes from "prop-types";

import "../../assets/css/open-sans.css";
import "../../assets/css/raleway.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";

import "../../assets/css/globalStyles.css";
import "../../assets/css/layout.css";
import "../../assets/css/responsive.css";

import Banner from "../../components/Banner";
import { ContactFormTemplate } from "../../templates/contact-page";
import "../../assets/css/contact.css";

const ContactPagePreview = props => {
  const { entry } = props;
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <React.Fragment>
        <Banner
          extraClass="contact-banner"
          title1="Contact"
          title2="US"
          text={data.blurb}
          breadcrumb="Contact us"
          imageBanner={data.imagebanner}
        />
        <ContactFormTemplate />
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};
ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPagePreview;
