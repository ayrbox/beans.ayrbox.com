module.exports = {
  siteMetadata: {
    title: 'beans.ayrbox',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
  pathPrefix: '/beans.ayrbox.com',
}
