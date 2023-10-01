// Page specific interfaces
import type { PageData } from "lume/core.ts";
import { navigation } from "../../_data/navigation.ts";
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
      <Head
        domain={data.domain}
        title={data.title}
        site_description={data.site_description}
        thumbnail={data.thumbnail}
      />
    </head>
    <body>
      <header>
        <Nav navigation={navigation} />
      </header>
      <main className="content">{data.children}</main>
    </body>
  </html>
);
