import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const image = () => <Img
      fluid={post.frontmatter.coverImage.childImageSharp.fluid}
      sizes={{...post.frontmatter.coverImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    return (
      <Layout
        image={image}
        location={this.props.location}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.date}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <div className='container pt-10 sm:pt-16 flex flex-col items-center'>
          <div className='blog-post w-full md:w-2/3 lg:w-1/2'>
            <div className='description'>
              {post.frontmatter.description}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
        <div className='container my-10'>
          <ul className='flex flex-wrap justify-between list-reset mt-10 lg:mt-16 text-gray-600'>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className='hover:text-blue-500'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className='hover:text-blue-500'>
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        coverImage {
          childImageSharp {
            fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
