const fs = require("fs");
const YAML = require("Yaml");

const json = JSON.parse(
  fs.readFileSync(__dirname + "/front-end-handbook-2019.json").toString()
);
const tagsData = fs
  .readFileSync(__dirname + "/front-end-handbook-2019-tags.txt")
  .toString()
  .split("\n");
const tagsMapData = fs
  .readFileSync(__dirname + "/front-end-handbook-2019-tags-map.txt")
  .toString()
  .split("\n")
  .map((d) => d.split("|||").map((d) => d.trim()));

const tagsMap = tagsData.reduce((prev, cur, i) => {
  prev[cur] = tagsMapData[i];
  return prev;
}, {});

json.forEach((d) => {
  let tags = [];
  d.tags.forEach((t) => {
    tags = tags.concat(tagsMap[t]);
  });

  const [name, desc] = d.name.split(" - ");
  d.name = name;
  d.tags = tags;
  desc && (d.desc = desc);
});

let res = json
  .filter((d) => {
    if (d.tags?.includes?.("delete")) {
      console.error("delete", d);
      return false;
    }
    return true;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

res.forEach((d, i, arr) => {
  if (d.name.toLowerCase() === arr?.[i - 1]?.name?.toLowerCase?.()) {
    d.tags.push("repetition");
  }
});

fs.writeFileSync(
  __dirname + "/front-end-handbook-2019.yaml",
  YAML.stringify(res)
);
