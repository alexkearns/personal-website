import React from "react"
import Nav from "./nav";

const Header = (props) => {
  const Image = props.image;
  return (
    <div className="header">
      <div className='w-full h-full absolute z-10'>
        <Image />
      </div>
      <div className="absolute bg-black w-full h-full z-10 opacity-75" />
      <div className="z-20 flex-grow flex flex-col">
        <Nav />
        <div className="text-white flex-grow container flex justify-center items-center">
          <div className="w-full">
            <div className="font-serif text-3xl font-bold leading-tight w-full md:text-4xl lg:text-5xl lg:w-2/3">
              {props.title}
            </div>
            <div className="font-sans font-regular mt-5 w-full text-xl font-light leading-tight lg:text-2xl lg:w-2/3">
              {props.subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
