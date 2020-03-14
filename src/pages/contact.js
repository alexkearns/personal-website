import React from "react"
import {graphql} from "gatsby"
import {Formik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import Img from "gatsby-image";
import Swal from 'sweetalert2'

import Layout from "../components/layout"

import SEO from "../components/seo"

const Contact = props => {
  const {data} = props;
  const image = () => <Img
    fluid={data.headerImage.childImageSharp.fluid}
    sizes={{...data.headerImage.childImageSharp.fluid}}
    style={{ height: '100%' }}
  />;

  const onSubmit = async (values, actions) => {
   axios({
      method: 'POST',
      url: process.env.GATSBY_CONTACT_FORM_URL,
      data: values
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'All done!',
        text: 'That\'s been sent for you. I\'ll be in touch soon!',
      })
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something\'s gone wrong, your message hasn\'t been sent :(',
      })
    });

    actions.setSubmitting(false);
  }

  return (
    <Layout
      location={props.location}
      title={'Contact Me'}
      subtitle={'Say Hi!'}
      image={image}
    >
      <SEO
        title="Contact Me"
        keywords={[`contact me`, `alex kearns`, `get in touch`]}
      />
      <div className="container flex flex-col items-center py-10 md:py-16">
        <Formik
          initialValues={{ email: '', message: ''}}
          onSubmit={onSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
            message: Yup.string()
              .required("Required")
          })}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" style={{ display: "block" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  className={
                    props.errors.email && props.touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {props.errors.email && props.touched.email && <div className="form-errors">{props.errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ display: "block" }}>
                  Message
                </label>
                <textarea
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.message}
                  name="message"
                  className={
                    props.errors.email && props.touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {props.errors.message && props.touched.email && <div className="form-errors">{props.errors.message}</div>}
              </div>
              
              <button className="form-submit" type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    headerImage: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
