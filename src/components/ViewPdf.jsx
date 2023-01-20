import React from "react";

function ViewPdf() {
  <>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
      <center>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
            width: "80%",
            zIndex: "2",
          }}
        >
          <Viewer fileUrl={book?.fileBook}></Viewer>
        </div>
      </center>
    </Worker>
  </>;
}

export default ViewPdf;
