import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Image from "gatsby-image";

const PaginaInfo = ({
  data: {
    mdx: { frontmatter, body },
  },
}) => (
  <Layout pageTitle={frontmatter.title}>
    <Image
      fluid={frontmatter.featuredImage.childImageSharp.fluid}
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

export default PaginaInfo;
