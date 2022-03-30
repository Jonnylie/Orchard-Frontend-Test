import React from "react";

function Modal({ img, onClose }) {
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  let modalContentStyle = {
    backgroundColor: "#0E1414",
  };

  let closeBtn = {
    color: "#FFFFFF",
    opacity: 1,
  };

  return (
    <div className="modal show fade" style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content" style={modalContentStyle}>
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="d-flex justify-content-center modal-body">
            <img src={img} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
