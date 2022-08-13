import '../../assets/styles/scss/Portfolio/FloatingButtonComponent.scss'
const FloatingButton = ({ icon, position }) => {
     return (
          <a href="#home" style={{ 'position': position }} className='floating-button'>
               <button>
                    {icon}
               </button>
          </a>
     );
}

export default FloatingButton;