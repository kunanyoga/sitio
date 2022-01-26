import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const SEO = ({
  title,
  url = null,
  description = null,
  imageUrl = null,
  imageAlt = null,
}) => {
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
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:url" content={url}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={imageUrl}></meta>
      <meta property="og:image:alt" content={imageAlt}></meta>
    </Helmet>
  );
};

export default SEO;
