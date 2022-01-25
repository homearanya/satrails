import React from "react"
import Helmet from "react-helmet"

const SchemaOrg = React.memo(
  ({ pageType, canonicalUrl, organization, tour, post }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        url: organization.url,
        name: organization.name,
        logo: organization.logo,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: organization.phone,
            contactType: "reservations",
          },
        ],
      },
    ]

    let schema

    switch (pageType) {
      case "tour":
        schema = [
          ...baseSchema,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: tour.name,
            image: tour.images.map((image) => {
              return `${canonicalUrl}/img/${image}`
            }),
            description: tour.description,
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              price: tour.price.replace(/[^0-9$.,]/g, ""),
              url: tour.url,
            },
          },
        ]
        break
      case "post":
        schema = [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": post.url,
                  name: post.name,
                  image: post.image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url: post.url,
            name: post.name,
            alternateName: post.alternateName,
            headline: post.name,
            image: {
              "@type": "ImageObject",
              url: post.image,
            },
            description: post.description,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished: post.datePublished,
          },
        ]
        break
      default:
        schema = baseSchema
    }

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)

export default SchemaOrg
