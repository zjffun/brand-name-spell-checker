import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { uglify } from "rollup-plugin-uglify";
import { dependencies, version } from "./package.json";

const externals = [/^nspell$/, /^name-dic\/.*/];

const uglifyOutput = (config) => {
  return [
    config,
    {
      ...config,
      file: config.file.replace(".js", ".min.js"),
      plugins: [
        uglify({
          output: {
            comments(node, comment) {
              if (comment.type === "comment2") {
                return /(name-spell-checker|nspell) version /i.test(
                  comment.value
                );
              }
              return false;
            },
          },
        }),
      ],
    },
  ];
};

const configs = [
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/index.esm.js",
    },
  },
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      file: "dist/index.cjs.js",
      exports: "default",
    },
    plugins: [
      typescript(),
      replace({
        preventAssignment: true,
        values: { "name-dic/esm/front-end.js": "name-dic/umd/front-end.js" },
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: uglifyOutput({
      banner: `/* name-spell-checker version ${version} */`,
      file: "dist/index.js",
      format: "umd",
      name: "NameSpellChecker",
      globals: {
        nspell: "nspell",
        "name-dic/umd/front-end.js": "nameDic.frontEnd",
      },
    }),
    plugins: [
      typescript(),
      replace({
        preventAssignment: true,
        values: { "name-dic/esm/front-end.js": "name-dic/umd/front-end.js" },
      }),
    ],
  },
];

const rollupConfig = configs.map((c) => ({
  plugins: [typescript()],
  external: (id) => {
    for (const external of externals) {
      if (external.test(id)) {
        return true;
      }
    }
    return false;
  },
  ...c,
}));

rollupConfig.push({
  input: "src/for-export-nspell-umd.js",
  output: uglifyOutput({
    banner: `/* nspell version ${dependencies.nspell} */`,
    format: "umd",
    file: "dist/nspell.js",
    name: "nspell",
  }),
  plugins: [commonjs(), nodeResolve()],
});

export default rollupConfig;
