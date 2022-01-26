import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const SEO = ({ title, description, imageUrl, path = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={imageUrl}></meta>
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="article"></meta>
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.siteUrl}/${path}`}
      ></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={imageUrl}></meta>
    </Helmet>
  );
};

export default SEO;
