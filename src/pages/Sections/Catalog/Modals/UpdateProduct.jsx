import React from "react";
import { useState } from "react";
import ModalIDTextField from '../../../../components/Modal/ModalTextField/ModalIDTextField';
import ModalTextField from '../../../../components/Modal/ModalTextField/ModalTextField';
import ReactModal from "react-modal";
import { MdClose } from "react-icons/md";
import "./style/EditProduct.style.scss";
function UpdateProduct({ id = 0 }) {
  const [BtnModalControl, setBtnModalControl] = useState(false);
  return (
    <div className="devCtrClassFromUpdateProduct">
      <button onClick={() => setBtnModalControl(true)}>Abrir</button>
      {/* Modal edit product */}
      <ReactModal
        isOpen={BtnModalControl}
        overlayClassName="ProductOverlayClass"
        className="EditProductModel"
      >
        <modalheader>
          <p>Edit Product</p>
          <button onClick={() => setBtnModalControl(false)}>
            <MdClose size={26} />
          </button>
        </modalheader>
        <div className="InputContent">
          <div>
            <ModalIDTextField disabled={true} placeholder={id} inputName="ID"/>
          </div>
          <div></div>
        </div>
      </ReactModal>
    </div>
  );
}

export default UpdateProduct;
