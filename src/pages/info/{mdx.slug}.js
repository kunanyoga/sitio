import * as React from "react";
import Layout from "../../components/Layout";
import "../../components/FontAwesome";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactoWhatsApp = () => (
  <Link
    href="https://wa.me/541168340304?text=¡Hola!%0ATengo%20ganas%20de%20empezar%20yoga,%20¿me%20pasarías%20los%20horarios?"
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
    mdx: { frontmatter, body },
  },
}) => (
  <Layout pageTitle={frontmatter.title}>
    <GatsbyImage
      image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
      style={{ margin: "20px 0" }}
    />
    <div style={{ textAlign: "justify", paddingBottom: "80px" }}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
    <ContactoWhatsApp />
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
