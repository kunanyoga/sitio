import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const SEO = ({ title, description, imagePath, path = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const fullUrl = (path: string) => `${data.site.siteMetadata.siteUrl}/${path}`;
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={fullUrl(imagePath)}></meta>
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={fullUrl(path)}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={fullUrl(imagePath)}></meta>
    </Helmet>
  );
};

export default SEO;
