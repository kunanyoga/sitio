import * as React from "react";
import { Button, Flex, Heading, Link } from "@theme-ui/components";
import "../components/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { graphql, Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import * as style from "./index.module.css";

const redesSociales: { icon: IconName; url: string }[] = [
  { icon: "instagram", url: "https://www.instagram.com/kunanyoga" },
  {
    icon: "whatsapp",
    url: "https://wa.me/541168340304?text=¡Hola!%0ATengo%20ganas%20de%20empezar%20yoga,%20¿me%20pasarías%20los%20horarios?",
  },
];

const titulo = "Kunan Yoga";

const IndexPage = ({ data }) => {
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
        {data.allMdx.nodes.map(it => (
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
        {redesSociales.map(it => (
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
