import * as React from "react";
import { Button, Flex, Heading, Link } from "@theme-ui/components";
import { StaticImage } from "gatsby-plugin-image";
import "../components/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { graphql, Link as GatsbyLink } from "gatsby";

const redesSociales: { icon: IconName; url: string }[] = [
  { icon: "instagram", url: "https://www.instagram.com/kunanyoga" },
  { icon: "whatsapp", url: "https://wa.me/541168340304" },
];

const titulo = "Kunan Yoga";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle={titulo}>
      <StaticImage
        alt="Logo"
        src="../images/logo.png"
        width={100}
        height={100}
      />
      <Heading as="h1" sx={{ fontSize: "3rem" }}>
        {titulo}
      </Heading>
      <Flex my="4" sx={{ flexDirection: "column" }}>
        {data.allMdx.nodes.map(it => (
          <GatsbyLink to={`/info/${it.slug}`}>
            <Button variant="primary" py="3" mb="2" sx={{ width: "100%" }}>
              {it.frontmatter.title}
            </Button>
          </GatsbyLink>
        ))}
      </Flex>
      <Flex sx={{ justifyContent: "center" }}>
        {redesSociales.map(it => (
          <Link href={it.url} target="_blank" rel="noopener noreferrer" mr="3">
            <FontAwesomeIcon
              icon={["fab", it.icon]}
              title={it.icon}
              color="white"
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
    allMdx {
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
