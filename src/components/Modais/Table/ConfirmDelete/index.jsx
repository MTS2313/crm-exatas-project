import '../../../../assets/styles/scss/Modais/Table/TableModal.scss'
import {close as CloseIcon} from '../../../../assets/svg/table.jsx'
import React from 'react';
import Modal from 'react-modal';


const ModalConfirmDelete = ({onDelete, show, handleClose}) => {
  return (
      <Modal 
           isOpen={show}
           className="Modal ModalConfirmDelete"
           overlayClassName="Overlay"
           onRequestClose={handleClose}
           shouldCloseOnOverlayClick={false}
        >
            <div className="container">
              <div className="header">
                  <span className="title">Are you sure</span>
                  <span className="closeIcon" onClick={handleClose}>
                    <CloseIcon />
                  </span>
              </div>
              <div className="content">
                <span>
                  Are you sure you want to delete, once you delete there is no going back?
                </span>
              </div>
              <div className="footer">
                <button className="delete" onClick={onDelete}>
                  Delete product
                </button>
                <button className="cancel" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
        </Modal>
  );
}


export default ModalConfirmDelete