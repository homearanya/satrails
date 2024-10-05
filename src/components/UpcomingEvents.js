import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Event from "../components/Event"

export const UpcomingEventsTemplate = ({ data, upcomingEvents }) => {
  let today = new Date()
  if (!upcomingEvents) {
    upcomingEvents = data.allMarkdownRemark.edges
  }
  return (
    <div className="tour-calendar adventures-grid section-padding list">
      <div className="container">
        <div className="row">
          <div>
            {upcomingEvents
              .filter((event) => new Date(event.node.frontmatter.date) > today)
              .map((event) => {
                const { frontmatter, id } = event.node
                return <Event key={id} eventInfo={frontmatter} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

const UpcomingEvents = () => {
  return (
    <StaticQuery
      query={graphql`
        query UpcomingEventsQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: ASC } }
            filter: { frontmatter: { templateKey: { eq: "upcoming-events" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  date
                  tour {
                    fields {
                      slug
                    }
                    frontmatter {
                      tour_id
                      destination
                      activity
                      duration
                      price
                      shortdescription
                      imageThumbnail {
                        image {
                          childImageSharp {
                            gatsbyImageData(
                              width: 370
                              height: 294
                              layout: CONSTRAINED
                            )
                          }
                        }
                        alt
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <UpcomingEventsTemplate data={data} />}
    />
  )
}

export default UpcomingEvents
