import * as React from "react";
import { Container, Button, Flex, Heading } from "@theme-ui/components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
        {/* <RedesSociales /> */}
      </Container>
    </main>
  );
};

export default IndexPage;
