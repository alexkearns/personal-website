import React from "react"
import { Link } from "gatsby"

const StandardPostInList = (props) => {
  const Image = props.image;
  return (
    <div className='post-in-list'>
      <Link to={props.link}>
        <div className='flex flex-col leading-tight'>
            <Image />
            <div className='mt-4'>
                <div className='text-center text-gray-700 uppercase underline text-xs'>{props.date}</div>
                <div className='font-serif text-center mt-3 text-lg'>{props.title}</div>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default StandardPostInList;
