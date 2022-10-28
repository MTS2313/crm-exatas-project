import "./styles/Table.scss";
import ButtonPopup from "./ButtonPopup";
import { useEffect, useState } from "react";
import ModalViewProduct from "../Modals/ViewProduct";
import ModalUpdateProduct from "../Modals/UpdateProduct";
import ImageModal from "../Modals/ImageModal";
import ModalUpdateSku from "../Modals/UpdateSku";
import { ModalContext } from "../Context/ModalContext";
import { useStock } from "../Context/StockContext";
import { MdLens } from "react-icons/md";

const TableLayout = ({ schema, data }) => {
  const [popup, setPopup] = useState(null);
  // showModal is relative to its modal, such as delete, view, update, or null

  const {
    showModal,
    setShowModal,
    productIndex,
    setProductIndex,
    imageModal,
    setImageModal,
    handleSetShowModal,
    displayPreviousModal,
    closeImageModal,
    handleClose,
  } = useStock();

  const displayModal = (modal, index) => {
    setPopup(null);
    setProductIndex(index);
    handleSetShowModal(modal);
  };

  const buildRow = (dataItem, index) => {
    return (
      <tr>
        {schema.properties.map((schemaItem) => {
          let { entityName, colgap, bold } = schemaItem;
          let item = dataItem[entityName];

          switch (entityName) {
            case "status":
              let isActive = item == "active";
              return (
                <td colSpan={colgap} className={bold && "bold"}>
                  {isActive && <MdLens color="#8CB469" />}
                  {item}
                </td>
              );
            case "name":
              return (
                <td colSpan={colgap} className={`${bold && "bold"} td-name`}>
                  <span
                    role="button"
                    onClick={() => displayModal("view-product", index)}
                  >
                    {item}
                  </span>
                </td>
              );
            default:
              return (
                <td colSpan={colgap} className={bold && "bold"}>
                  {item}
                </td>
              );
          }
        })}
        <td>
          <ButtonPopup
            onView={() => displayModal("view-product", index)}
            onDelete={() => displayModal("delete-product", index)}
            onUpdate={() => displayModal("update-product", index)}
            index={index}
            popup={popup}
            setPopup={setPopup}
          />
        </td>
      </tr>
    );
  };

  return (
    // MODAL PROVIDER
    <>
      {/* -------------------- MODAL ViewProduct */}
      <ModalViewProduct
        show={showModal.currentModal == "view-product"}
        product={data[productIndex]}
        handleClose={handleClose}
      />
      {/* -------------------- MODAL UpdateProduct */}
      {/* <ModalUpdateProduct
                    show={showModal == 'update-product'}
                    handleClose={handleClose}
                    /> */}
      {/* -------------------- MODAL UpdateSKU */}
      <ModalUpdateSku
        handleClose={handleClose}
        handlePreviousModal={displayPreviousModal}
        show={showModal.currentModal == "update-sku"}
      />

      {imageModal && (
        <ImageModal src={imageModal} closeImageModal={closeImageModal} />
      )}
      {/* <ModalDeleteProduct
                    show={showModal == 'delete-product'}
                    handleClose={handleClose}
                /> */}

      <table className="tablelayout" cellSpacing="0">
        <thead>
          <tr>
            {schema.properties.map(({ name, colgap }, index) => (
              <th colSpan={colgap} key={index}>
                {name}
              </th>
            ))}

            <th key="options"></th>
          </tr>
        </thead>
        <tbody>{data.map((item, index) => buildRow(item, index))}</tbody>
      </table>
    </>
  );
};

export default TableLayout;
