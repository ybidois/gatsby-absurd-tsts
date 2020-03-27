const path = require('path');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/images/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/images/art`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Absurd`,
        short_name: `absurd`,
        start_url: `/`,
        background_color: `#8bd8ed`,
        theme_color: `#8bd8ed`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`average`, `prata\:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/'),
        },
      },
    },
    {
    resolve: `gatsby-plugin-facebook-analytics`,
    options: {
      // Required - set this to the ID of your Facebook app.
      appId: `152925082646115`,

      // Which version of the SDK to load.
      version: `v3.3`,

      // Determines whether XFBML tags used by social plugins are parsed.
      xfbml: true,

      // Determines whether a cookie is created for the session or not.
      cookie: false,

      // Include Facebook analytics in development.
      // Defaults to false meaning the library will only be loaded in production.
      includeInDevelopment: false,

      // Include debug version of sdk
      // Defaults to false meaning the library will load sdk.js
      debug: false,

      // Select your language.
      language: `en_US`,
    },
  ],
};
