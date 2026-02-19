import React from "react";

const PDFViewer = ({ pageNumber }) => {
  return (
    <iframe
      src={`/final.pdf#page=${pageNumber}`}
      width="100%"
      height="100%"
      style={{ border: "none" }}
      title="PDF Viewer"
    />
  );
};

export default PDFViewer;
