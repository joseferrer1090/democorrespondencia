export default class PDFJs {
  init = (source, element) => {
    const iframe = document.createElement("iframe");
    iframe.src = `/pdfjs-2.1.266-dist/web/viewer.html?file=${source}`;
    iframe.width = "100%";
    iframe.height = "600px";

    element.appendChild(iframe);
  };
}
