import * as React from "react";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => (
  <div>
    <title>{pageTitle}</title>
    <main>{children}</main>
  </div>
);

export default Layout;
