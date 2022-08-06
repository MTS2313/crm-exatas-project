import '../../assets/styles/scss/Auth/RaisedButtonComponent.scss'

const RaisedButton= ({text}) => {
     return ( 
          <button className={'raised-button'}>
               {text}
          </button>
      );
}
 
export default RaisedButton;