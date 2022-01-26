import * as React from "react";
import { Button, Flex, Heading, Link } from "@theme-ui/components";
import "../components/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { graphql, Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import * as style from "./index.module.css";
import { urlWhatsApp } from "../components/WhatsApp";

function redesSociales(
  numeroWhatsApp: string,
  mensajeWhatsApp: string
): { icon: IconName; url: string }[] {
  return [
    { icon: "instagram", url: "https://www.instagram.com/kunanyoga" },
    {
      icon: "whatsapp",
      url: urlWhatsApp(numeroWhatsApp, mensajeWhatsApp),
    },
  ];
}

const titulo = "Kunan Yoga";

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { whatsApp },
    },
    allMdx,
  },
}) => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          class: style.bgImage,
        }}
      />
      <Heading as="h1" sx={{ fontSize: "3rem", color: "primary" }}>
        {titulo}
      </Heading>
      <Flex my="4" sx={{ flexDirection: "column" }}>
        {allMdx.nodes.map(it => (
          <GatsbyLink key={it.slug} to={`/info/${it.slug}`}>
            <Button
              variant="primary"
              py="3"
              mb="2"
              sx={{ width: "100%", maxWidth: 500, color: "accent" }}
            >
              {it.frontmatter.title}
            </Button>
          </GatsbyLink>
        ))}
      </Flex>
      <Flex sx={{ justifyContent: "center" }}>
        {redesSociales(whatsApp.numero, whatsApp.mensaje).map(it => (
          <Link
            key={it.icon}
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            mr="3"
            sx={{ color: "primary" }}
          >
            <FontAwesomeIcon
              icon={["fab", it.icon]}
              title={it.icon}
              opacity={0.7}
              size="2x"
            />
          </Link>
        ))}
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        whatsApp {
          numero
          mensaje
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___position }
      filter: { frontmatter: { partial: { ne: true } } }
    ) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
