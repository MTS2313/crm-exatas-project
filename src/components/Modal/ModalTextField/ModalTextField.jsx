const ModalTextField = ({ inputName, placeholder,disabled }) => {
     return (
          <div className="modalInput">
               <p>{inputName}</p>
               <input disabled={disabled} className="modalTextField" placeholder={placeholder} />
          </div>
     );
}

export default ModalTextField;