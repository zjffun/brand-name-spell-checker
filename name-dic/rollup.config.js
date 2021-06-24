import typescript from "@rollup/plugin-typescript";
import { string } from "rollup-plugin-string";
import { version } from "./package.json";

const configs = [
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      file: "dist/index.js",
      name: "nameDic",
    },
  },
  {
    input: "src/front-end.ts",
    output: {
      format: "umd",
      file: "dist/front-end.js",
      name: "nameDic.frontEnd",
    },
  },
  {
    input: "src/front-end.ts",
    output: {
      format: "esm",
      file: "esm/front-end.js",
    },
  },
  {
    input: "src/programming-language.ts",
    output: {
      format: "umd",
      file: "dist/programming-language.js",
      name: "nameDic.programmingLanguage",
    },
  },
  {
    input: "src/programming-language.ts",
    output: {
      format: "esm",
      file: "esm/programming-language.js",
    },
  },
];

export default configs.map((c) => ({
  input: c.input,
  output: {
    banner: `/* brand-name version ${version} */`,
    ...c.output,
  },
  plugins: [
    typescript(),
    string({
      include: "src/*.dic",
    }),
  ],
}));
