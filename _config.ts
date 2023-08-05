import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  src: "./src",
  server: {
    open: true,
  },
});

site.use(code_highlight());
site.use(sass());
site.copy("assets");

export default site;
