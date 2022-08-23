import './styles/RaisedButtonComponent.scss'

const RaisedButton= ({text}) => {
     return ( 
          <button className={'raised-button'}>
               {text}
          </button>
      );
}
 
export default RaisedButton;