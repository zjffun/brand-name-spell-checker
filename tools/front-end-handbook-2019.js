/**
 * https://frontendmasters.com/books/front-end-handbook/2019
 */
(function () {
  let names = [];

  Array.from(document.querySelector("#chapter5").children).forEach((el) => {
    if (el.tagName === "UL") {
      Array.from(el.querySelectorAll("li > a")).forEach((el) => {
        names.push(el.innerText.replace(/(.*?) - .*$/, "$1"));
      });
    }
  });

  download(names.join("\n"), "front-end-handbook-2019.txt");
})();
