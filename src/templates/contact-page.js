import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { ContactForm } from "../components/ContactForm";
import ContactDetails, {
  ContactDetailsTemplate
} from "../components/ContactDetails";
import SEO from "../components/SEO/SEO";

import "../assets/css/contact.css";

export const ContactFormTemplate = ({ location, contact_details }) => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ backgroundColor: "#ffffff" }}>
            <div id="contact-form" className="contact-form">
              <div className="contact-us-form-wrapper">
                <div className="contact-us-form section-padding">
                  <div className="row">
                    <div className="section-title text-center">
                      <div className="title-border">
                        <h1>
                          Contact <span>Form</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      {location && location.state && location.state.subject ? (
                        <ContactForm subject={location.state.subject} />
                      ) : (
                        <ContactForm />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {contact_details ? (
            <ContactDetailsTemplate contact_details={contact_details} />
          ) : (
            <ContactDetails />
          )}
        </div>
      </div>
    </div>
  );
};

export default class ContactPage extends Component {
  render() {
    const { fields, frontmatter } = this.props.data.ContactPageQuery;

    const pageMeta = {
      title: `Contact Us · Slackpacking, Walks & Cycle Tours`,
      description: `Contact us by email, phone or through our web form`,
      slug: fields.slug,
      datePublished: false
    };
    return (
      <Layout>
        <SEO pageData={pageMeta} />
        <Banner
          extraClass="contact-banner"
          title1="Contact"
          title2="US"
          text={frontmatter.blurb}
          breadcrumb="Contact us"
          imageBanner={frontmatter.imagebanner}
        />
        <ContactFormTemplate location={this.props.location} />
      </Layout>
    );
  }
}

export const contactPageQuery = graphql`query ContactPage($id: String!) {
  ContactPageQuery: markdownRemark(id: {eq: $id}) {
    fields {
      slug
    }
    frontmatter {
      blurb
      imagebanner {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        alt
      }
    }
  }
}
`;
