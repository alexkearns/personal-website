import React from "react"
import { Link } from "gatsby"
import Nav from './nav';

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {/* Header */}
        <Nav />
        {/* Body */}
        <div>{children}</div>
        {/* Footer */}
        <div className='text-xs py-5 bg-gray-200'>
            <div className='container'>
                © Copyright {new Date().getFullYear()}, Alex Kearns
            </div>
        </div>
      </div>
    )
  }
}

export default Layout
