import '../../assets/styles/scss/Portfolio/FilledButtonComponent.scss'

const FilledButton = ({ backgroundColor, fontColor, text, className }) => {
     return (
          <button className={'filled-button ' + className} style={{ 'background': backgroundColor, 'color': fontColor }}>
               {text}
          </button>
     );
}

export default FilledButton;