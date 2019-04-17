/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              fontFamily: `'IBM Plex Mono', monospace`,
            }}>
            <p>
              I live and work in Norwich for ubisend, specialising in building chatbots. Simple as that really. You can follow me on <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> to keep up to date with all things tech in my life.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
