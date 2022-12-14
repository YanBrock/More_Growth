/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/More_Growth",
  siteMetadata: {
    title: `Task for More Growth`,
    description: `This is an app which was created as a test task which should show how I can to manage with Web Developer's responsibilities from More Growth`,
    keywords: `task, web app, web developer`,
    url: `http://localhost:8000/`,
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
  ],
}
