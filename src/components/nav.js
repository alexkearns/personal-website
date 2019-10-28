import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const {title} = data.site.siteMetadata;
        return (
          <div className="py-4 text-white">
            <div className='container'>
              <div className='font-serif flex items-center justify-between uppercase font-regular'>
                <div className="font-bold text-lg">
                  <Link to='/'>{title}</Link>
                </div>
                <ul className="text-gray-400 list-reset flex text-sm tracking-wider font-bold font-sans">
                  <li className="hover:underline mr-6"><Link to='/'>Home</Link></li>
                  <li className="hover:underline"><Link to='/articles'>Articles</Link></li>
                </ul>
              </div>
            </div>
          </div>
        );
      }}
    />
  )
};

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