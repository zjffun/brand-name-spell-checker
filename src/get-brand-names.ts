import preprocess from "./preprocess";

const fs = require("fs");
const path = require("path");

export default () => {
  const map = new Map();
  fs.readFileSync(
    path.resolve(`${__dirname}`, `../brand-names/javascript-libraries.txt`)
  )
    .toString()
    .split("\n")
    .map((name) => name.trim())
    .filter((name) => !name.startsWith("# ") && name !== "")
    .forEach((name) => {
      map.set(preprocess(name), name);
    });

  return map;
};
