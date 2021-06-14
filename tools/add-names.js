const fs = require("fs");
const path = require("path");

const to = "programming-languages";
const fromPath = "";

const toPath = path.resolve(__dirname, `../src/brand-names/${to}.dic`);

const toArr = fs.readFileSync(toPath).toString().split("\n");
let fromArr = [];
if (fromPath) {
  fromArr = fs.readFileSync(fromPath).toString().split("\n");
}

let result = toArr.concat(fromArr).filter((d) => d !== "");
result = [...new Set(result)];
result.sort();

fs.writeFileSync(toPath, result.join("\n"));
