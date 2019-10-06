import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import StandardPostInList from "../components/standard-post-in-list"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header
            title={'Develop for work, develop as a hobby, travel to switch off.'} 
            subtitle={"Hey, I'm Alex. I'm passionate about developing scalable, secure software for all."}
        />
        <div className="container py-10 md:py-16 lg:py-20">
            {posts.map(({ node }) => {
                return (
                    <StandardPostInList
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
    site {
      siteMetadata {
          author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`
