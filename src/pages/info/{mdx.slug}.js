import * as React from "react";
import Layout from "../../components/Layout";
import "../../components/FontAwesome";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { urlWhatsApp } from "../../components/WhatsApp";
import SEO from "../../components/SEO";

const ContactoWhatsApp = ({ numero, mensaje }) => (
  <Link
    href={urlWhatsApp(numero, mensaje)}
    target="_blank"
    rel="noopener noreferrer"
    mr="3"
    style={{
      position: "fixed",
      width: "50px",
      height: "50px",
      bottom: "40px",
      right: "40px",
      backgroundColor: "#5bc884",
      color: "white",
      borderRadius: "50px",
      textAlign: "center",
      fontSize: "30px",
      boxShadow: "2px 2px 3px #999",
      zIndex: 100,
    }}
  >
    <FontAwesomeIcon
      icon={["fab", "whatsapp"]}
      title="WhatsApp"
      style={{ marginTop: "10px" }}
    />
  </Link>
);

const PaginaInfo = ({
  data: {
    mdx: { excerpt, frontmatter, body },
    site: {
      siteMetadata: {
        whatsApp: { numero, mensaje },
      },
    },
  },
}) => (
  <>
    <SEO
      title={`Kunan Yoga | ${frontmatter.title}`}
      description={excerpt}
      imageUrl={
        frontmatter.featuredImage.childImageSharp.gatsbyImageData.images
          .fallback.src
      }
    />
    <Layout pageTitle={frontmatter.title}>
      <GatsbyImage
        image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
        style={{ margin: "20px 0" }}
      />
      <div style={{ textAlign: "justify", paddingBottom: "80px" }}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <ContactoWhatsApp numero={numero} mensaje={mensaje} />
    </Layout>
  </>
);

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        whatsApp {
          numero
          mensaje
        }
      }
    }
    mdx(id: { eq: $id }) {
      excerpt
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
