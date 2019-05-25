import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  ${tw`leading-normal`}
  & > .blog-post-date {
    ${tw`block uppercase opacity-50 mb-6`}
  }
  & > div > * {
    ${tw`mb-6`}
  }
  & ul {
    list-style-type: disc;
  }
  & ol {
    list-style-type: decimal;
  }
  & li > ul {
    ${tw`ml-3 mt-1 mb-0`}
  }
  & li {
    ${tw`mb-1`}
  }
  & > h1, h2, h3, h4, h5, h6 {
    ${tw`mb-6 font-bold font-serif`}
  }
  & h1 {
    ${tw`text-4xl mb-0`}
  }
  & h2 {
    ${tw`text-3xl`}
  }
  & h3 {
    ${tw`text-2xl`}
  }
  & h4 {
    ${tw`text-xl`}
  }
  & h5 {
    ${tw`text-lg`}
  }
  & h6 {
    ${tw`text-base`}
  }
`;

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
        <Section>
          <h1>{post.frontmatter.title}</h1>
          <p className={'blog-post-date'}>
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Section>
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
