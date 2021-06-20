import typescript from "@rollup/plugin-typescript";
import { string } from "rollup-plugin-string";
import { version } from "./package.json";

const configs = [
  {
    input: "src/front-end.ts",
    output: {
      format: "umd",
      file: "umd/front-end.js",
      name: "brandName.frontEnd",
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
      file: "umd/programming-language.js",
      name: "brandName.programmingLanguage",
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
