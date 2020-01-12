import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import StandardPostInList from "../components/standard-post-in-list"
import SEO from "../components/seo"
import Img from "gatsby-image";

class Index extends React.Component {
  render() {
    const {data} = this.props;
    const albums = data.albums.edges;
    const image = () => <Img
      fluid={data.headerImage.childImageSharp.fluid}
      sizes={{...data.headerImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    return (
      <Layout
        location={this.props.location}
        title={'Photography'}
        subtitle={'See the world through my eyes.'}
        image={image}
      >
        <SEO
          title="All albums"
          keywords={[`blog`, `alex kearns`, `photography`, `alex kearns photography`, `landscapes`]}
        />
        <div className="container flex flex-col md:flex-row pt-10 md:pt-16 flex-wrap">
          {albums.map(({node}) => {
            const album = node.childMarkdownRemark;
            const image = () => <Img
              fluid={album.frontmatter.coverImage.childImageSharp.fluid}
              sizes={{...album.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 1}}
            />;

            return (
              <StandardPostInList
                image={image}
                key={album.fields.slug}
                link={album.fields.slug}
                title={album.frontmatter.title || album.fields.slug}
                date={album.frontmatter.date}
                excerpt={album.frontmatter.description || album.excerpt}
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
    headerImage: file(relativePath: { eq: "camera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    albums: allFile(filter: {sourceInstanceName: {eq: "photography"}, internal: {mediaType: {eq: "text/markdown"}}}, sort: {fields: [childMarkdownRemark___frontmatter___date], order: DESC}, limit: 3) {
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
