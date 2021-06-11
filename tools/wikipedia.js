/**
 * https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
 */
(function getBrandNames() {
  let names = [];

  Array.from(document.querySelector(".mw-parser-output").children).forEach(
    (el) => {
      if (el.tagName === "H2") {
        names.push(`\n# ${el.querySelector(".mw-headline").innerText}`);
      }
      if (el.tagName === "UL") {
        console.log(el);
        Array.from(el.children).forEach((el) => {
          names.push(el.innerText);
        });
      }
    }
  );

  download(names.join("\n"), "javascript-libraries.txt");
})();
