module.exports = {
  siteMetadata: {
    siteUrl: "https://kunan.yoga",
    title: "Kunan Yoga",
    description: "Yoga integral y consciente. Clases virtuales y presenciales.",
    whatsApp: {
      numero: "541168340304",
      mensaje:
        "¡Hola!\nTengo ganas de empezar yoga, ¿me pasarías los horarios?",
    },
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "info",
        path: "./src/info/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kunan Yoga`,
        short_name: `Kunan Yoga`,
        start_url: `/`,
        background_color: `#d7b5a4`,
        theme_color: `#71293d`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
  ],
};
