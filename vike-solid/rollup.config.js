import withSolid from "./with-solid.js";
import dts from "rollup-plugin-dts";
import { babel } from "@rollup/plugin-babel";

export default [
  withSolid({
    input: [
      "./renderer/onRenderHtml.tsx",
      "./main.ts",
      "./+config.ts",
      "./hooks/usePageContext.tsx",
      "./hooks/useData.tsx",
      "./components/ClientOnly.tsx",
      "./cli/index.ts",
    ],
    ssr: true,
    external: ["vike/server", "vike/plugin"],
  }),
  withSolid({
    input: [
      "./renderer/onRenderClient.tsx",
      "./hooks/usePageContext.tsx",
      "./hooks/useData.tsx",
      "./cli/index.ts",
    ],
    ssr: false,
    external: ["vike/server", "vike/plugin"],
  }),
  {
    input: [
      "./main.ts",
      "./+config.ts",
      "./hooks/usePageContext.tsx",
      "./hooks/useData.tsx",
      "./components/ClientOnly.tsx",
      "./vite-plugin-vike-solid.ts",
    ],
    output: [{ dir: "dist", format: "es", sanitizeFileName: false }],
    plugins: [dts()],
  },
  {
    input: "./vite-plugin-vike-solid.ts",
    plugins: [
      babel({
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        babelHelpers: "bundled",
        presets: ["@babel/preset-typescript"],
      }),
    ],
    output: [
      {
        file: "dist/vite-plugin-vike-solid.js",
        format: "es",
        sanitizeFileName: false,
      },
    ],
    external: ["vite"],
  },
];
