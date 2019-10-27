import React from "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import StandardPostInList from "../components/standard-post-in-list"
import SEO from "../components/seo"

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
        title={'Develop for work, develop as a hobby, travel to switch off.'}
        subtitle={"Hey, I'm Alex. I'm passionate about developing scalable, secure software for all."}
        image={image}
      >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="container py-10 md:py-16 flex flex-col items-center sm:flex-row">
          <div className='w-full mb-8 sm:mb-0 sm:w-1/2 sm:p-8'>
            <Img
              fluid={data.profileImage.childImageSharp.fluid}
              sizes={{...data.profileImage.childImageSharp.fluid, aspectRatio: 2/2.5}}
            />
          </div>
          <div className='w-full sm:w-2/3 sm:pl-20 text-gray-700'>
            <h3 className='text-gray-900 mb-5'>Basically, I'm a bit of a geek</h3>
            <p>
              Day to day, I'm working at <a target='_blank' rel="noopener noreferrer" href={'https://www.ubisend.com'}>ubisend</a> as the lead developer on a new software as a service product. I've been there a couple of years now. In a nutshell, ubisend are a leading UK chatbot company.
            </p>
            <p>
              The purpose of my website is to showcase some of the cool things I'm working on there, as well as outside, and to act as a record of what I've done in the past.
            </p>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container py-10 md:py-32 flex flex-col items-center">
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
          <div className='w-full flex flex-col md:flex-row flex-wrap'>
            {posts.map(({node}) => {
              const image = () => <Img
                fluid={node.frontmatter.coverImage.childImageSharp.fluid}
                sizes={{...node.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 2/2.5}}
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
          <Link
            className='-mt-3 block uppercase text-sm border-2 text-gray-700 border-gray-700 px-4
              leading-loose py-1 font-bold hover:bg-gray-700 hover:text-gray-100'
            to={'/articles'}
          >
            See all articles
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
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3    
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
                fluid(maxWidth: 3000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
