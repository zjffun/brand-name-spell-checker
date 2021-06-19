javascript:(() => {
  function download(data, filename, mime, bom) {
    var blobData = typeof bom !== "undefined" ? [bom, data] : [data];
    var blob = new Blob(blobData, { type: mime || "application/octet-stream" });

    var blobURL =
      window.URL && window.URL.createObjectURL
        ? window.URL.createObjectURL(blob)
        : window.webkitURL.createObjectURL(blob);
    var tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", filename);

    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }

    document.body.appendChild(tempLink);
    tempLink.click();

    setTimeout(function () {
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(blobURL);
    }, 200);
  }

  download(window.downloadData, window.downloadFilename);
})()
