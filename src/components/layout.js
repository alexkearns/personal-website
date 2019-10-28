import React from "react"
import Header from "./header";
import PrivacyPopup from "./privacy-pop-up";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className='flex flex-col min-h-screen'>
        <Header
          image={this.props.image}
          title={this.props.title}
          subtitle={this.props.subtitle}
        />
        {/* Body */}
        <div>{children}</div>
        {/* Spacer */}
        <div className='flex-grow' />
        {/* Footer */}
        <div className='text-xs py-5 bg-gray-200'>
            <div className='container'>
                © Copyright {new Date().getFullYear()}, Alex Kearns
            </div>
        </div>
        <PrivacyPopup />
      </div>
    )
  }
}

export default Layout
