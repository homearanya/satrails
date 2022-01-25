import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Menu(props) {
  return (
    <StaticQuery
      query={graphql`query MenuQuery {
  switches: markdownRemark(fields: {slug: {eq: "/config/"}}) {
    frontmatter {
      blogswitch
      calendarswitch
    }
  }
  LogoQuery: markdownRemark(fields: {slug: {eq: "/logo/"}}) {
    frontmatter {
      colorlogo {
        image {
          childImageSharp {
            gatsbyImageData(width: 150, placeholder: NONE, layout: CONSTRAINED)
          }
        }
        alt
      }
      whitelogo {
        image {
          childImageSharp {
            gatsbyImageData(width: 150, placeholder: NONE, layout: CONSTRAINED)
          }
        }
        alt
      }
    }
  }
  tourMenu: markdownRemark(fields: {slug: {eq: "/tour-menu/"}}) {
    frontmatter {
      section {
        heading1
        heading2
        image {
          image {
            childImageSharp {
              gatsbyImageData(width: 450, placeholder: NONE, layout: CONSTRAINED)
            }
          }
          alt
        }
        tours {
          tour {
            fields {
              slug
            }
            frontmatter {
              tour_id
              duration
            }
          }
        }
      }
    }
  }
}
`}
      render={data => {
        const switches = data.switches.frontmatter;
        const { frontmatter: logos } = data.LogoQuery;
        const { section } = data.tourMenu.frontmatter;
        return (
          <div>
            <MenuDesktop
              sections={section}
              switches={switches}
              logos={logos}
              tourPage={props.tourPage}
            />
            <MenuMobile sections={section} switches={switches} />
          </div>
        );
      }}
    />
  );
}
