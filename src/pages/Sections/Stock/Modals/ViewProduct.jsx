import Modal from "react-modal";
import { useState } from "react";
import "../../../../components/Modal/style/Modal.scss";
import { close as CloseIcon } from "../../../../assets/svg/table.jsx";
import TextField from "@mui/material/TextField";
import FilledButton from "../../../../components/Portfolio/FilledButtonComponent";
import "./style/ViewProduct.scss";
import TableSku from "../Table/TableSku";
import testSkuDataList from "./data/testSkuData";
import schema from "../../../../assets/data/stock/productSku.schema";
import {getTimeStampFormattedStock} from '../../../../components/utils/timestampFormat'
import Specifications from "./subContent/Specifications";

Modal.setAppElement("#crmbody");

const ViewProduct = ({ handleClose, show, product }) => {
  const [skuAba, setSkuAba] = useState(0);

  const toggleSkuAba = (i) => setSkuAba(i);

  if (!product) return null;

  return (
    <Modal
      isOpen={show}
      className="modal viewProductModal"
      overlayClassName="overlay"
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={false}
    >
      <div className="modalContainer">
        {/* --------------- HEADER */}
        <div className="modalHeader">
          <span className="modalTitle">{product.name}</span>
          <span className="modalCloseIcon" onClick={handleClose}>
            <CloseIcon />
          </span>
        </div>
        {/* --------------- CONTENT */}
        <div className="modalBody">
          <div className="modalContent">
            <div className="row">
              {/* ------------ ROW ID */}
              <div className="row">
                <div className="col">
                  <TextField
                    type="text"
                    label="ID"
                    disabled
                    defaultValue={product.id}
                    className="input-s"
                  />
                </div>
              </div>
              {/* ---------------- LEFT SIDE */}
              <div className="left-side">
                {/* --------------- ROW 2  */}
                <div className="row row-2">
                  <div className="col">
                    <TextField
                      type="text"
                      label="Marca"
                      disabled
                      defaultValue={product.brand}
                      className="input-s"
                    />
                  </div>
                  <div className="col">
                    <TextField
                      type="text"
                      label="Classificacao"
                      disabled
                      defaultValue={product.category}
                      className="input-s"
                    />
                  </div>
                </div>
                {/* --------------- ROW 3  */}
                <div className="row">
                  <div className="col">
                    <TextField
                      label="updated at"
                      variant="standard"
                      defaultValue={getTimeStampFormattedStock(product.date_updated)}
                      disabled
                      className="input-dateupdate"

                    />
                  </div>

                  {/* <div className="col">
                    <span>last update: {product.date_updated}</span>
                  </div> */}
                </div>
              </div>
              {/* ---------------- RIGHT SIDE */}

              <div className="right-side">
                <div className="row">
                  <div className="col">
                    <TextField
                      type="text"
                      label="Description"
                      disabled
                      multiline
                      defaultValue={product.description}
                      className="input-textfield"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="viewProductFooter">
            <div className="modalSku">
              <div className="modalSkuActions">
                <button
                  onClick={() => {
                    toggleSkuAba(0);
                  }}
                  className={`modalSkuActionButton ${skuAba == 0 && "active"}`}
                >
                  SKUs
                </button>
                <button
                  onClick={() => {
                    toggleSkuAba(1);
                  }}
                  className={`modalSkuActionButton ${skuAba == 1 && "active"}`}
                >
                  Specifications
                </button>
              </div>
              <div className="modalSkuBase productSkuModal">
                {skuAba === 0 && (
                  <TableSku schema={schema} data={product["list_sku"]} />
                )}
                {skuAba === 1 && (<Specifications additional={product["additional_sku_specs"]} />)}
              </div>
            </div>
            <div className="viewProductActions">
              <FilledButton
                onClick={handleClose}
                fontColor={"white"}
                text={"Close"}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewProduct;
