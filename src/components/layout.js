import React from "react"
import Header from "./header";

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header
          image={this.props.image}
          title={this.props.title}
          subtitle={this.props.subtitle}
        />
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
