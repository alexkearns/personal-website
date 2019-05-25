import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const BioInner = styled.div`
  ${tw`border border-grey border-solid border-t-0 border-l-0 border-r-0 pb-5`}
  & > p {
    ${tw`mb-4`}
  }
`;

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <BioInner>
            <p>
              I live and work in Norwich for ubisend, specialising in building chatbots. Simple as that really. I travel when I can and I'm determined to see as much of the world as possible. This blog is a way for me to document and showcase my journey both professionally and personally.
            </p>
            <p>
              You can follow me on <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> to keep up to date with all things my life.
            </p>
          </BioInner>
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
