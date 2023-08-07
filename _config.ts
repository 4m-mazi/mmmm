import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  src: "./src",
  server: {
    open: true,
  },
});

site.use(code_highlight());
site.use(sass());
site.use(jsx());
site.use(mdx());
site.copy("assets");

export default site;
