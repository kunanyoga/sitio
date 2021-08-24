import * as React from "react";
import { Container } from "@theme-ui/components";

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
        {children}
      </Container>
    </main>
  </div>
);

export default Layout;
