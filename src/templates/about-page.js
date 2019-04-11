import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SEO from "../components/SEO/SEO";
import DestinationsArea from "../components/DestinationsArea";
import AssociatesArea from "../components/AssociatesArea";

import "../assets/css/about.css";

export default ({ data }) => {
  const { fields, frontmatter } = data.AboutPageQuery;
  const pageMeta = {
    title: `About Us · Slackpacking, Walks & Cycle Tours`,
    description: `SA Adventure Trails is a marketing association between Paul Colvin of Wild Coast Walks and Julia Colvin of Spekboom Tours.`,
    slug: fields.slug,
    datePublished: false
  };
  return (
    <Layout>
      <SEO pageData={pageMeta} />
      <Banner
        extraClass="about-banner"
        title1="About"
        title2="US"
        text={frontmatter.banner.blurb}
        breadcrumb="About us"
        imageBanner={frontmatter.banner.imagebanner}
      />
      {/* <AboutAdventures /> */}
      <AssociatesArea
        heading1={frontmatter.partnersarea.heading1}
        heading2={frontmatter.partnersarea.heading2}
        blurb={frontmatter.partnersarea.introduction}
        partners={frontmatter.partnersarea.partner}
      />
      <DestinationsArea
        heading1={frontmatter.destinationsarea.heading1}
        heading2={frontmatter.destinationsarea.heading2}
        blurb={frontmatter.destinationsarea.introduction}
        destinations={frontmatter.destinationsarea.destination}
      />
    </Layout>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    AboutPageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        banner {
          blurb
          imagebanner {
            image {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 750) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt
          }
        }
        destinationsarea {
          heading1
          heading2
          introduction
          destination {
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
            }
            heading1
            heading2
            content {
              paragraph {
                text
              }
            }
          }
        }
        partnersarea {
          heading1
          heading2
          introduction
          partner {
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 270) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
            }
            heading1
            heading2
            content {
              paragraph {
                text
              }
            }
          }
        }
      }
    }
  }
`;
