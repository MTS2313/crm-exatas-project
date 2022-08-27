const ModalIDTextField = ({ inputName, placeholder, disabled, width }) => {
     return (
          <div style={{'width': width}} className="modalInput inactive">
               <p>{inputName}</p>
               <input  disabled={disabled} className="modalTextField" placeholder={placeholder} />
          </div>
     );
}

export default ModalIDTextField;