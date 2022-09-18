import dic from "./programming-language.dic";

const dicWithCount = `${dic.split("\n").length}\n${dic}`;

export default {
  aff: `SET UTF-8`,
  dic: dicWithCount,
};
