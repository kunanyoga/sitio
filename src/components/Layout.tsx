import * as React from "react";
import { Container } from "@theme-ui/components";
import { StaticImage } from "gatsby-plugin-image";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => (
  <div>
    <title>{pageTitle}</title>
    <main>
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
        {children}
      </Container>
    </main>
  </div>
);

export default Layout;
