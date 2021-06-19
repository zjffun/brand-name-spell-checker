import typescript from "@rollup/plugin-typescript";
import { string } from "rollup-plugin-string";
import { version } from "./package.json";

const configs = [
  {
    input: "src/front-end.ts",
    output: {
      file: "dist/front-end.js",
      name: "brandName.frontEnd",
    },
  },
  {
    input: "src/programming-language.ts",
    output: {
      file: "dist/programming-language.js",
      name: "brandName.programmingLanguage",
    },
  },
];

export default configs.map((c) => ({
  input: c.input,
  output: {
    format: "umd",
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
