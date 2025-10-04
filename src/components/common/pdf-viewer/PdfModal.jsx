import React from "react";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx"; // أيقونة الإغلاق
import PdfViewer from "./PdfViewer";

const PdfModal = ({ fileUrl, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header
        style={{ justifyContent: "flex-end", borderBottom: "none" }}
      >
        <RxCross2
          onClick={onHide}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        />
      </Modal.Header>

      <Modal.Body style={{ overflowY: "scroll", maxHeight: "80vh" }}>
        <PdfViewer fileUrl={fileUrl} />
      </Modal.Body>
    </Modal>
  );
};

export default PdfModal;
