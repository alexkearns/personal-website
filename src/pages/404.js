import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const image = () => <Img
      fluid={data.headerImage.childImageSharp.fluid}
      sizes={{...data.headerImage.childImageSharp.fluid}}
      style={{ height: '100%' }}
    />;

    return (
      <Layout title={'404 Not Found'} subtitle={'Uh oh, this doesn\'t go anywhere'} image={image}>
        <SEO title="404: Not Found" />
        <div className='container py-10 md:py-16'>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    headerImage: file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;