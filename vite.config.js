import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import replace from "@rollup/plugin-replace";

const isGitHubPages = true;
const folderName = `${path.basename(process.cwd())}/`;
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? `/${folderName}` : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  envDir: "../",
  publicDir: "../public",
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },
  plugins: [
    vue(),
    replace({
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true)
    })
  ],
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
});
