import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'IBM Plex Mono', monospace;
    color: #000000;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const TitleHeader = styled.header`
  ${tw`p-4 uppercase bg-grey-lighter mb-10 w-full font-light text-left`};
  box-sizing: border-box;
`;

const Container = styled.div`
  ${tw`flex flex-col items-center w-screen min-h-screen`};
  & > * { 
    max-width: 650px;
  }
`;

const Main = styled.main`
  ${tw`flex-grow`}
`;

const Footer = styled.footer`
  ${tw`text-xs mb-2 mt-10`}
`;

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <Container>
        <GlobalStyles />
        <TitleHeader>
          <Link to={`/`}>
            {title}
          </Link>
        </TitleHeader>
        <Main>{children}</Main>
        <Footer>
          © Copyright {new Date().getFullYear()}, Alex Kearns
        </Footer>
      </Container>
    )
  }
}

export default Layout
