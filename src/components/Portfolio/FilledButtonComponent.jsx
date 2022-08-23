import './styles/FilledButtonComponent.scss'

const FilledButton = ({ backgroundColor, fontColor, text, className, icon }) => {
     return (
          <button className={'filled-button ' + className} style={{ 'background': backgroundColor, 'color': fontColor }}>
               {icon}
               <span>{text}</span>
          </button>
     );
}

export default FilledButton;