module.exports = {
  siteMetadata: {
    title: `Alex Kearns`,
    author: `Alex Kearns`,
    description: `A blog demonstrating the abilities of Alex Kearns`,
    siteUrl: `https://alexkearns.dev`,
    social: {
      twitter: `alex_kearns`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`, `600`, `700`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`300`, `300i`, `400`, `400i`, `600`, `600i`, `700`, `700i`]
          },
          {
            family: `Source Code Pro`,
            variants: [`400`, `400i`, `600`, `600i`, `700`, `700i`]
          },
        ],
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    }
  ],
}
