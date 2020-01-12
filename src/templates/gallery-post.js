import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

class GalleryTemplate extends React.Component {
  render() {
    const album = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const image = () => <Img
      fluid={album.frontmatter.coverImage.childImageSharp.fluid}
      sizes={{...album.frontmatter.coverImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    const gallery = album.frontmatter.gallery && (album.frontmatter.gallery.map((image, key) => {
      return <div key={key} className='gallery-item'>
        <Img
          fluid={image.childImageSharp.fluid}
          sizes={{...image.childImageSharp.fluid}}
        />
      </div>
    }));

    return (
      <Layout
        image={image}
        location={this.props.location}
        title={album.frontmatter.title}
        subtitle={album.frontmatter.date}
      >
        <SEO
          title={album.frontmatter.title}
          description={album.frontmatter.description}
        />
        <div className='container pt-10 sm:pt-16 flex flex-col items-center'>
          <div className='blog-post w-full md:w-2/3 lg:w-1/2'>
            <div className='description'>
              {album.frontmatter.description}
            </div>
            <div dangerouslySetInnerHTML={{ __html: album.html }} />
            {gallery && <div className="gallery">{gallery}</div>}
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

export default GalleryTemplate

export const pageQuery = graphql`
  query GalleryPostBySlug($slug: String!) {
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
        gallery {
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
