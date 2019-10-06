import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div 
            className='h-32 sm:h-64 lg:h-128'
            style={{
                backgroundImage: "url('https://picsum.photos/2000')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        />
        <div className='container py-10 sm:py-16'>
          <div className='mb-10 sm:mb-16'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>{post.frontmatter.title}</h1>
            <p className='text-md uppercase text-gray-600 font-medium'>
                {post.frontmatter.date}
            </p>
          </div>
          <div className='blog-post'>
          <div className='md:ml-16 text-md' dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
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
      }
    }
  }
`
