import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";

// استايلات العارض والبلجن
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ fileUrl }) => {
  // استخدم البلجن

  return (
    <div>
      <Worker workerUrl="/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
