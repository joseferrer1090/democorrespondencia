export default class PDFJs {
  init = (source, element, width, height) => {
    const iframe = document.createElement("object");
    iframe.data = `/pdfjs-2.5.207-dist/web/viewer.html?file=${source}`;
    iframe.width = `${width}`;
    iframe.height = `${height}`;

    element.appendChild(iframe);
    // console.log(iframe.src);
  };
}
