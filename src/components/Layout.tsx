import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container } from "@theme-ui/components";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>
          {pageTitle
            ? `${pageTitle} | ${data.site.siteMetadata.title}`
            : data.site.siteMetadata.title}
        </title>
      </Helmet>
      <main>
        <Container
          mt="4"
          sx={{
            maxWidth: "700px",
            width: "80%",
            textAlign: "center",
          }}
        >
          <Link to="/">
            <StaticImage
              alt="Logo"
              src={"../images/logo.png"}
              width={100}
              height={100}
            />
          </Link>
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout;
