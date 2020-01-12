const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const articles = graphql(
    `
      {
        allFile(filter: {sourceInstanceName: {eq: "blog"}, internal: {mediaType: {eq: "text/markdown"}}}) {
          edges {
            node {
              childMarkdownRemark {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allFile.edges
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

    posts.forEach(({ node }, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const post = node.childMarkdownRemark;

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })

  const photography = graphql(
    `
      {
        allFile(filter: {sourceInstanceName: {eq: "photography"}, internal: {mediaType: {eq: "text/markdown"}}}) {
          edges {
            node {
              childMarkdownRemark {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allFile.edges
    const template = path.resolve(`./src/templates/gallery-post.js`)

    posts.forEach(({ node }, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const post = node.childMarkdownRemark;

      createPage({
        path: post.fields.slug,
        component: template,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })

  return Promise.all([articles, photography]);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const sourceName = getNode(node.parent).sourceInstanceName;
    const slugMap = {
      blog: 'articles',
      photography: 'albums'
    }
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/${slugMap[sourceName]}${value}`,
    })
  }
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
      node: {
          fs: 'empty'
      }
  })
}