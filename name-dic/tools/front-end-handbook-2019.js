/**
 * https://frontendmasters.com/books/front-end-handbook/2019
 */
(function () {
  let data = [];

  Array.from(document.querySelector("#chapter5").children).forEach((el) => {
    if (el.tagName === "UL") {
      Array.from(el.querySelectorAll("li > a")).forEach((lia) => {
        const tags = ["Front-end"];
        let prevEl = el.previousElementSibling;
        while (prevEl.tagName === "H4" || prevEl.tagName === "H3") {
          tags.push(prevEl.innerText);
          prevEl = prevEl.previousElementSibling;
        }
        data.push({
          name: lia.innerText,
          url: lia.href,
          tags,
        });
      });
    }
  });

  window.data = data;
  window.downloadData = JSON.stringify(data);
  window.downloadFilename = "front-end-handbook-2019.json";
})();
