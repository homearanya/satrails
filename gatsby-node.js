const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

let eventsObject = {}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/pages/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              destination
              activity
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    // create pages
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        // tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode })
    if (value.includes("/tours/")) {
      value = `/tours/${node.frontmatter.destination
        .replace(/\s+/g, "-")
        .toLowerCase()}/${node.frontmatter.activity
        .replace(/\s+/g, "-")
        .toLowerCase()}${value.substring(6)}`
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    // collect nodes for tour - events relationship
    if (
      node.frontmatter.templateKey &&
      node.frontmatter.templateKey.includes("tour-page")
    ) {
      if (eventsObject[node.frontmatter.tour_id]) {
        createNodeField({
          name: `tourevents`,
          node,
          value: eventsObject[node.frontmatter.tour_id],
        })
      }
    } else if (
      node.frontmatter.templateKey &&
      node.frontmatter.templateKey.includes("upcoming-events")
    ) {
      if (eventsObject[node.frontmatter.tour]) {
        eventsObject[node.frontmatter.tour].push(node.id)
      } else {
        eventsObject[node.frontmatter.tour] = []
        eventsObject[node.frontmatter.tour].push(node.id)
      }
    }
  }
}
