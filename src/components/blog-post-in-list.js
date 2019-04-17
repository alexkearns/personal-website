import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

class BlogPostInList extends React.Component {
  render() {
    const Outer = styled.div`
      ${tw`my-12`};
      & > small {
        ${tw`block uppercase text-sm mt-2 opacity-50`}
      }
    `;

    const Title = styled.div`
      & > a { 
        ${tw`text-black font-bold text-lg no-underline hover:bg-black hover:text-yellow text-black`}
      }
      ${tw`mb-2`}
    `;

    return (
      <Outer>
        <Title>
          <Link to={this.props.link}>
            {this.props.title}
          </Link>
        </Title>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.excerpt,
          }}
        />
        <small>{this.props.date}</small>
      </Outer>
    )
  }
}

export default BlogPostInList;
