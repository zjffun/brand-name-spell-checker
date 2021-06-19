const fs = require("fs");
const path = require("path");
const YAML = require("Yaml");

const data = YAML.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/front-end.yaml")).toString()
);

const dic = [data.length + 1];

data.forEach((d) => {
  dic.push(d.name);
  d?.alias?.forEach((d) => {
    dic.push(d);
  });
});

dic.sort();

fs.writeFileSync(
  path.resolve(__dirname, "../src/front-end.dic"),
  dic.join("\n")
);
