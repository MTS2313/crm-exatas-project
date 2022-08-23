import '../styles/TableModal.scss'
import {close as CloseIcon} from '../../../../assets/svg/table.jsx'
import React from 'react';
import Modal from 'react-modal';

const ModalViewItem = ({
    displayModal,
    index,
    item, 
    show, 
    handleClose}) => {

        const changeModalDelete = () => displayModal('delete', index)
        const changeModalUpdate = () => displayModal('update', index)

  return (
      <Modal 
           isOpen={show}
           className="Modal ModalViewItem"
           overlayClassName="Overlay"
           onRequestClose={handleClose}
           shouldCloseOnOverlayClick={false}
        >
            <div className="container">
              {/* --------------- HEADER */}
              <div className="header">
                  <span className="title">VIEW ITEM</span>
                  <span className="closeIcon" onClick={handleClose}>
                    <CloseIcon />
                  </span>
              </div>
              {/* --------------- CONTENT */}
              <div className="content">
                <span>
                  view
                </span>
              </div>
              {/* --------------- FOOTER */}
              <div className="footer">
                <div className="group">
                    <button className="delete" onClick={changeModalDelete}>
                    Delete product
                    </button>
                    <button className="update" onClick={changeModalUpdate}>
                    Edit product
                    </button>
                </div>
                <button className="cancel" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
        </Modal>
  );
}


export default ModalViewItem