import type { PageData } from "lume/core.ts";
interface Props extends PageData {
  domain: string;
  title: string;
  site_description: string;
  thumbnail: string;
}

export default ({ domain, title, site_description, thumbnail }: Props) => (
  <>
    {title && <meta property="og:title" content={title} />}
    {site_description && (
      <>
        <meta property="og:description" content={site_description} />
        <meta property="description" content={site_description} />
      </>
    )}

    {thumbnail && (
      <>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={`${domain}${thumbnail}`} />
      </>
    )}
  </>
);
