import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";

const PaginaInfo = ({
  data: {
    mdx: { frontmatter, body },
  },
}) => (
  <Layout pageTitle={frontmatter.title}>
    <GatsbyImage
      image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
      style={{ margin: "20px 0" }}
    />
    <div style={{ textAlign: "justify" }}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
      body
    }
  }
`;

export default PaginaInfo;
