import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import StandardPostInList from "../components/standard-post-in-list"
import SEO from "../components/seo"
import Img from "gatsby-image";

class Index extends React.Component {
  render() {
    const {data} = this.props;
    const talks = data.talks.edges;
    const image = () => <Img
      fluid={data.headerImage.childImageSharp.fluid}
      sizes={{...data.headerImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    return (
      <Layout
        location={this.props.location}
        title={'Talks'}
        subtitle={'A record of talks that I\'ve given and will be giving'}
        image={image}
      >
        <SEO
          title="Talks"
          keywords={[`talks`, `alex kearns`, `conferences`, `speaking`]}
        />
        <div className="container flex flex-col md:flex-row pt-10 md:pt-16 flex-wrap">
          {talks.map(({node}) => {
            const talk = node.childMarkdownRemark;
            const image = () => <Img
              fluid={talk.frontmatter.thumbnailImage.childImageSharp.fluid}
              sizes={{...talk.frontmatter.thumbnailImage.childImageSharp.fluid, aspectRatio: 1}}
            />;

            return (
              <StandardPostInList
                image={image}
                key={talk.fields.slug}
                link={talk.fields.slug}
                title={talk.frontmatter.title || talk.fields.slug}
                date={talk.frontmatter.date}
                excerpt={talk.frontmatter.description || talk.excerpt}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    headerImage: file(relativePath: { eq: "mic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    talks: allFile(filter: {sourceInstanceName: {eq: "talks"}, internal: {mediaType: {eq: "text/markdown"}}}, sort: {fields: [childMarkdownRemark___frontmatter___date], order: DESC}, limit: 3) {
      edges {
        node {
          childMarkdownRemark {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              thumbnailImage {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
