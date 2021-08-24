import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Heading } from "@theme-ui/components";

const PaginaInfo = ({ data }) => (
  <Layout pageTitle={data.mdx.frontmatter.title}>
    <Heading as="h2">{data.mdx.frontmatter.title}</Heading>
    <div style={{ textAlign: "justify" }}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
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
