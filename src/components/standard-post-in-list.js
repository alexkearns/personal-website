import React from "react"
import { Link } from "gatsby"

const StandardPostInList = (props) => {
  return (
    <div className='mb-10 md:mb-16 md:ml-16'>
      <Link to={props.link}>
        <div className='flex w-full leading-tight items-center md:w-2/3 lg:w-1/2'>
            <img className='rounded-full' src="https://picsum.photos/125" />
            <div className='ml-10'>
                <div className='font-bold text-2xl text-blue-500 mb-2 md:text-4xl hover:text-blue-700'>{props.title}</div>
                <div className='text-md uppercase text-gray-600 font-medium'>{props.date}</div>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default StandardPostInList;
