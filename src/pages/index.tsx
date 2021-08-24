import * as React from "react";
import { Container, Button, Flex, Heading, Link } from "@theme-ui/components";
import { StaticImage } from "gatsby-plugin-image";
import "../components/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const enlaces = [
  { nombre: "Consejos para la práctica", icono: ["fas", "info-circle"] },
  { nombre: "Clases presenciales", icono: ["fas", "users"] },
  { nombre: "Clases virtuales", icono: ["fas", "laptop"] },
  {
    nombre: "Horarios y precios",
    url: "/info/horarios",
    icono: ["far", "calendar-alt"],
  },
];

const redesSociales: { icon: IconName; url: string }[] = [
  { icon: "instagram", url: "https://www.instagram.com/kunanyoga" },
  { icon: "whatsapp", url: "https://wa.me/541168340304" },
];

const titulo = "Kunan Yoga";

const IndexPage = () => {
  return (
    <main>
      <title>{titulo}</title>
      <Container
        mt="4"
        sx={{
          maxWidth: "500px",
          textAlign: "center",
          color: "white",
        }}
      >
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
          {enlaces.map(it => (
            <Button
              variant="primary"
              py="3"
              mb="2"
              style={{ borderRadius: "10px" }}
            >
              {it.nombre}
            </Button>
          ))}
        </Flex>
        <Flex sx={{ justifyContent: "center" }}>
          {redesSociales.map(it => (
            <Link
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              mr="3"
            >
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
      </Container>
    </main>
  );
};

export default IndexPage;
