// Page specific interfaces
import type { PageData } from "lume/core.ts";

interface LayoutData extends PageData {
  domain: string;
  title: string;
  site_description: string;
  thumbnail: string;
}

// Helper function specific interface
import Head from "../partials/head.tsx";
import Nav from "../partials/nav.tsx";

export default (data: LayoutData) => (
  <html lang="ja" prefix="og: http://ogp.me/ns#">
    <head>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" type="text/css" href="/css/index.css" />
      <title>{data.title}</title>
      <Head {...data} />
    </head>
    <body>
      <div className="container">
        <header>
          <Nav />
        </header>
        <main className="content">{data.children}</main>
      </div>
    </body>
  </html>
);
