import React from 'react';

function Modal({ show, onClose, title, children }) {
    if (!show) return null;

    return (
        <div
            className="modal show fade"
            style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark border-danger">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger">{title}</h5>
                        <button
                            type="button"
                            className="close btn btn-danger"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-white">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
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
