/**
 * https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
 */
(function () {
  let names = [];

  Array.from(document.querySelector(".mw-parser-output").children).forEach(
    (el) => {
      if (el.tagName === "UL") {
        Array.from(el.children).forEach((el) => {
          names.push(el.innerText);
        });
      }
    }
  );

  download(names.join("\n"), "javascript-libraries.txt");
})();

/**
 * https://en.wikipedia.org/wiki/List_of_programming_languages
 */
(function () {
  let names = [];

  Array.from(
    document.querySelector("#mw-content-text").querySelectorAll(".div-col ul")
  ).forEach((el) => {
    Array.from(el.children).forEach((el) => {
      names.push(el.innerText);
    });
  });

  download(names.join("\n"), "programming-languages.txt");
})();
