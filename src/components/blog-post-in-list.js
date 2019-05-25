import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const BlogPostInList = (props) => {
  const Outer = styled.div`
    ${tw`my-12`};
    & > small {
      ${tw`block uppercase text-sm mt-2 opacity-50`}
    }
  `;

  const Title = styled.div`
    & > a {
      ${tw`text-black font-bold text-xl no-underline hover:bg-flat-blue hover:text-yellow text-black font-serif`}
    }
    ${tw`mb-2`}
  `;

  return (
    <Outer>
      <Title>
        <Link to={props.link}>
          {props.title}
        </Link>
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: props.excerpt,
        }}
      />
      <small>{props.date}</small>
    </Outer>
  );
}

export default BlogPostInList;
