module.exports = {
  siteMetadata: {
    title: "SA Adventure Trails",
    defaultTitle: "Adventure Trails in SA",
    description: `
    SA Adventure Trails is a marketing association between Paul Colvin of Wild Coast Walks and Julia Colvin of Spekboom Tours. Together we offer the best selection of fully supported hiking and cycling tours in KwaZulu Natal and the Eastern Cape Wild Coast`,
    canonicalUrl: "https://www.trails.co.za",
    image: "https://www.trails.co.za/img/meander-hike-gallery_2.jpg",
    author: {
      name: "Carlos Gonzalez",
      minibio: `
        <strong>Carlos Gonzalez</strong> is a front-end web developer specialised in ReactJS/Gatsby.
        He lives in Howick, KZN, South Africa.
      `,
    },
    organization: {
      name: "SA Adventure Trail",
      url: "https://www.trails.co.za",
      logo: "https://www.trails.co.za/img/sa-trails-logo-color.png",
    },
    siteUrl: "https://www.trails.co.za", // for gatsby plugin sitemap
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.trails.co.za",
        sitemap: "https://www.trails.co.za/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-NHC6XS7",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "SA Adventure Trails",
        short_name: "satrails",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/img/icon.png", // This pat is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    "gatsby-plugin-remove-serviceworker",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/general`,
        name: "general",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src_images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: "transparent", // required to display blurred image first
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://wildtrails.us17.list-manage.com/subscribe/post?u=792c9f598edc1eff7ee0c6658&amp;id=9415608b3b", // see instructions section below
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify-identity-widget",
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
  mapping: {
    "MarkdownRemark.frontmatter.tour": `MarkdownRemark.frontmatter.tour_id`,
    "MarkdownRemark.frontmatter.toursarea.section.tours.tour": `MarkdownRemark.frontmatter.tour_id`,
    "MarkdownRemark.frontmatter.section.tours.tour": `MarkdownRemark.frontmatter.tour_id`,
    "MarkdownRemark.fields.tourevents": `MarkdownRemark`,
  },
}
