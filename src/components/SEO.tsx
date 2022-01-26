import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({ title, description, imagePath, path = "" }) {
  const {
    site: {
      siteMetadata: { title: siteTitle, siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={siteUrl + imagePath}></meta>
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={`${siteUrl}/${path}`}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={siteUrl + imagePath}></meta>
    </Helmet>
  );
}
