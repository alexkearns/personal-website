import React from "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import StandardPostInList from "../components/standard-post-in-list"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const {data} = this.props;
    const posts = data.posts.edges;
    const albums = data.photography.edges;
    const image = () => <Img
      fluid={data.headerImage.childImageSharp.fluid}
      sizes={{...data.headerImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    return (
      <Layout
        location={this.props.location}
        title={'Develop for work, develop as a hobby, travel to switch off.'}
        subtitle={"Hey, I'm Alex. I'm passionate about developing scalable, secure software for all."}
        image={image}
      >
        <SEO
          title="Home"
          keywords={[`blog`, `alex kearns`, `javascript`, `react`, `php`, `laravel`]}
        />
        <div className="container py-10 md:py-16 flex flex-col items-center sm:flex-row">
          <div className='w-full mb-8 sm:mb-0 sm:w-1/2 sm:pr-6 lg:pr-8'>
            <Img
              fluid={data.profileImage.childImageSharp.fluid}
              sizes={{...data.profileImage.childImageSharp.fluid, aspectRatio: 2/2.5}}
            />
          </div>
          <div className='w-full sm:w-2/3 sm:pl-6 lg:pl-8 text-gray-700'>
            <h3 className='text-gray-900 mb-5'>Basically, I'm a bit of a geek</h3>
            <p>
              Day to day, I'm working at BT as a Cloud Software Architect. This means that I spend my days designing and implementing infrastructure for new software systems (both internal and customer). My specialty is in Amazon Web Services.
            </p>
            <p>
              The purpose of my website is to showcase some of the cool things I'm working on there, as well as outside, and to act as a record of what I've done in the past.
            </p>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container py-10 md:py-32 flex flex-col">
            <h2 className="text-gray-100">What else do I do?</h2>
            <div className='flex flex-col md:flex-row w-full mt-8'>
              <div className='home-what-do-i-do'>
                <div className='home-what-do-i-do-header'>
                  Travel
                </div>
                <div className='home-what-do-i-do-desc'>
                  I love to travel. When I can. I'm determined to see as much of the world as possible,
                  and I truly believe that experiencing new places makes you a richer person (in every way
                  but financially!)
                </div>
              </div>
              <div className='home-what-do-i-do'>
                <div className='home-what-do-i-do-header'>
                  Photography
                </div>
                <div className='home-what-do-i-do-desc'>
                  Photography has always been a passion of mine. Especially landscapes. I like to capture
                  the world in my own way when I'm travelling, as well as memories day-to-day. I have a
                  particular interest in film.
                </div>
              </div>
              <div className='home-what-do-i-do'>
                <div className='home-what-do-i-do-header'>
                  Side Projects
                </div>
                <div className='home-what-do-i-do-desc'>
                  I enjoy software development. I enjoy it so much that doing it for my day job isn't
                  enough. I'm always thinking up new ideas for side projects and often have a few on the
                  go at one time. One day, I'd love to launch something as a product.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center pb-10 pt-10 md:pt-16 md:pb-16">
          <h2 className="w-full text-gray-900 mb-8">Latest Articles</h2>
          <div className='w-full flex flex-col md:flex-row flex-wrap'>
            {posts.map(({node}) => {
              const post = node.childMarkdownRemark;
              const image = () => <Img
                fluid={post.frontmatter.coverImage.childImageSharp.fluid}
                sizes={{...post.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 1}}
              />;

              return (
                <StandardPostInList
                  image={image}
                  key={post.fields.slug}
                  link={post.fields.slug}
                  title={post.frontmatter.title || post.fields.slug}
                  date={post.frontmatter.date}
                  excerpt={post.frontmatter.description || post.excerpt}
                />
              )
            })}
          </div>
          <Link
            className='-mt-3 block uppercase text-sm border-2 text-gray-700 border-gray-700 px-4
              leading-loose py-1 font-bold hover:bg-gray-700 hover:text-gray-100'
            to={'/articles'}
          >
            See all articles
          </Link>
        </div>
        <hr />
        <div className="container flex flex-col items-center pb-10 pt-10 md:pt-16 md:pb-16">
          <h2 className="w-full text-gray-900 mb-8">Latest Photography</h2>
          <div className='w-full flex flex-col md:flex-row flex-wrap'>
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
          <Link
            className='-mt-3 block uppercase text-sm border-2 text-gray-700 border-gray-700 px-4
              leading-loose py-1 font-bold hover:bg-gray-700 hover:text-gray-100'
            to={'/albums'}
          >
            See all photography
          </Link>
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
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    posts: allFile(filter: {sourceInstanceName: {eq: "blog"}, internal: {mediaType: {eq: "text/markdown"}}}, sort: {fields: [childMarkdownRemark___frontmatter___date], order: DESC}, limit: 3) {
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
    photography: allFile(filter: {sourceInstanceName: {eq: "photography"}, internal: {mediaType: {eq: "text/markdown"}}}, sort: {fields: [childMarkdownRemark___frontmatter___date], order: DESC}, limit: 3) {
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
