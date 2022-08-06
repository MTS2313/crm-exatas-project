import '../../assets/styles/scss/SquareButtonComponent.scss'

const SquareButton = ({ icon, onClick, style }) => {
     return (
          <button className="square-button" style={style} onClick={onClick}>
               {icon}
          </button>
     );
}

export default SquareButton;