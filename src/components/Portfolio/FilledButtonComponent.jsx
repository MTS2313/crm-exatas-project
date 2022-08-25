import './styles/FilledButtonComponent.scss'

const FilledButton = ({ backgroundColor, fontColor, text, className, icon, onClick }) => {
     return (
          <button onClick={onClick} className={'filled-button ' + className} style={{ 'background': backgroundColor, 'color': fontColor }}>
               {icon}
               <span>{text}</span>
          </button>
     );
}

export default FilledButton;