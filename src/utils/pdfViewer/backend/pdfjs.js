export default class PDFJs {
  init = (source, element, width, height) => {
    const object = document.createElement("object");
    object.data = `/pdfjs-2.5.207-dist/web/viewer.html?file=${source}`;
    object.width = `${width}`;
    object.height = `${height}`;
    element.appendChild(object);
  };
}
