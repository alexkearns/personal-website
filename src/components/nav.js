import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { title } = data.site.siteMetadata
        return (
          <div className="bg-white py-5 border-b border-gray-400">
            <div className='container'>
                <div className="text-xl font-medium"><Link to='/'>{title}</Link></div>
            </div>
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  query NavQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Nav
