import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PaginaInfo = ({ data }) => (
  <Layout pageTitle={data.mdx.frontmatter.title}>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default PaginaInfo;
