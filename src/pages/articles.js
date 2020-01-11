import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import StandardPostInList from "../components/standard-post-in-list"
import SEO from "../components/seo"
import Img from "gatsby-image";

class Index extends React.Component {
  render() {
    const {data} = this.props;
    const posts = data.allMarkdownRemark.edges;
    const image = () => <Img
      fluid={data.headerImage.childImageSharp.fluid}
      sizes={{...data.headerImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    return (
      <Layout
        location={this.props.location}
        title={'Blog'}
        subtitle={'Keep up to date with all my goings on.'}
        image={image}
      >
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="container flex flex-col md:flex-row pt-10 md:pt-16 flex-wrap">
          {posts.map(({node}) => {
            const image = () => <Img
              fluid={node.frontmatter.coverImage.childImageSharp.fluid}
              sizes={{...node.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 1}}
            />;

            return (
              <StandardPostInList
                image={image}
                key={node.fields.slug}
                link={node.fields.slug}
                title={node.frontmatter.title || node.fields.slug}
                date={node.frontmatter.date}
                excerpt={node.frontmatter.description || node.excerpt}
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
    headerImage: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
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
`
