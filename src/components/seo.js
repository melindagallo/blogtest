/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )
  
const schemaOrgJSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Visby Medical",
  "url": "https://www.visbymedical.com/",
  "logo": "https://media.visbymedical.com/VisbyLogoTM.png",
  "contactPoint": {
	 "@type": "ContactPoint",
	 "telephone": "833-468-4729",
	 "contactType": "customer service",
	 "contactOption": "TollFree",
	 "areaServed": "US",
	 "availableLanguage": "en"
  },
  "sameAs": [
	"https://www.linkedin.com/company/visbymedical",
	"https://twitter.com/visbymedical",
	"https://www.facebook.com/visbymedical/"
  ]
} 

const metaDescription = description || site.siteMetadata.description
const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `title`,
          content: title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
     >
      <script type="application/ld+json">{ JSON.stringify(schemaOrgJSONLD) }</script>
 </Helmet>
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
