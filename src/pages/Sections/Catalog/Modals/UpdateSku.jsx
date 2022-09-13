import './style/TableModal.scss'
import {close as CloseIcon} from '../../../../assets/svg/table.jsx'
import React from 'react';
import Modal from 'react-modal';

const UpdateSku = ({
    index,
    item, 
    show, 
    handleClose}) => {

        console.log('i am here', show)
  return (
      <Modal 
           isOpen={show}
           className="Modal ModalUpdateItem"
           overlayClassName="overlay"
           onRequestClose={handleClose}
           shouldCloseOnOverlayClick={false}
        >
            <div className="container">
              {/* --------------- HEADER */}
              <div className="header">
                  <span className="title">UPDATE ITEM</span>
                  <span className="closeIcon" onClick={handleClose}>
                    <CloseIcon />
                  </span>
              </div>
              {/* --------------- CONTENT */}
              <div className="content">
                <span>
                  Update
                </span>
              </div>
              {/* --------------- FOOTER */}
              <div className="footer">
                <button className="delete">
                  Delete Product
                </button>

                <div className="group">
                  <button className="discart" onClick={handleClose}>
                    Discart changes
                  </button>
                  
                  <button className="save" onClick={() => {alert('saved');handleClose()}}>
                    Save data
                  </button>
                </div>
              </div>
            </div>
        </Modal>
  );
}


export default UpdateSku