import "../style/Specifications.scss";
import TextField from "@mui/material/TextField";

import {
  MdCancel,
  MdAddCircleOutline,
  MdOutlineChevronLeft,
  MdCheckCircle,
} from "react-icons/md";
import { createRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Specifications = ({ additional }) => {

    const [confirmDelete, setConfirmDelete] = useState(false)
    useEffect(() => {
        console.log('testhg ue', confirmDelete)
    }, [confirmDelete])

  const [inputValue, setInputValue] = useState("");
  let addBtn = createRef(),
    cancelBtn = createRef(),
    confirmBtn = createRef(),
    input = createRef();

  function onAdd() {
    input.current.classList.add("active");
    cancelBtn.current.classList.add("active");
    // confirmBtn.current.classList.add('active')
    addBtn.current.classList.remove("active");
  }

  function onCancel() {
    setInputValue("");
    input.current.classList.remove("active");
    cancelBtn.current.classList.remove("active");
    confirmBtn.current.classList.remove("active");
    addBtn.current.classList.add("active");
  }

  function onConfirm() {
    setInputValue("");
    input.current.classList.remove("active");
    cancelBtn.current.classList.remove("active");
    confirmBtn.current.classList.remove("active");
    addBtn.current.classList.add("active");
  }

  function oninputChange(e) {
    let { value } = e.target;
    setInputValue(value);
    if (value) {
      confirmBtn.current.classList.add("active");
    } else {
      confirmBtn.current.classList.remove("active");
    }
  }

  function onDeleteAdditional(index) {

    setConfirmDelete(index)
  }

  return (
    <div className="specifications-container">
      <div className="row">
        <div className="text-wrapper">
          <span className="text-description">
            Specifications are additional properties that can be added to your
            store's products or SKUs. A specification is used to create site
            browsing filters and to differentiate SKUs and products within the
            product page.
          </span>
        </div>
      </div>
      {confirmDelete === false ? (

        <div className="content">
            <div className="row">
            <div className="items-wrapper">
                <ul>
                {additional.map(({ name, id }, index) => {
                    return (
                    <li>
                        <div className="additional-item" data-additional-id={id}>
                        {name}
                        </div>
                        <span
                        className="delete-item"
                        role="button"
                        onClick={() => onDeleteAdditional(index)}
                        >
                        <MdCancel color="#f84d4d" size="2rem" />
                        </span>
                    </li>
                    );
                })}
                </ul>
            </div>
            </div>
            <div className="row">
            <hr />
            </div>
            <div className="row">
            <div className="addmore-wrapper">
                <button className="cancel" ref={cancelBtn} onClick={onCancel}>
                <MdOutlineChevronLeft color="#000" size="2rem" />
                </button>
                <TextField
                type="text"
                label="Add new specification"
                className="input-addmore"
                ref={input}
                variant="filled"
                value={inputValue}
                onChange={oninputChange}
                />
                <button className="add active" ref={addBtn} onClick={onAdd}>
                <MdAddCircleOutline color="#000" size="2rem" />
                <span>Add more</span>
                </button>

                <button className="confirm" ref={confirmBtn} onClick={onConfirm}>
                <MdCheckCircle color="#2a7ffa" size="2rem" />
                Done
                </button>
            </div>
            </div>
        </div>
      ): (
      <div className="confirm-delete-content">
        Tem certeza que quer deletar: {additional[confirmDelete].name}
      </div>
      )}


    </div>

  );
};

export default Specifications;
