import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = (props) => {
  return (
    <div className="bg-gray-200 py-10 md:py-16 lg:py-20">
        <div className="container">
            <div className="text-4xl font-bold leading-none w-full md:text-5xl lg:text-6xl lg:w-2/3">
                {props.title}
            </div>
            <div className="mt-5 w-full text-2xl font-light leading-tight lg:text-3xl lg:w-2/3">
                {props.subtitle}
            </div>
        </div>
    </div>
  )
}

export default Header
