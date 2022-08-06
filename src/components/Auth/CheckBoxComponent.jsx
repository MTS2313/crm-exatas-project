import '../../assets/styles/scss/Auth/CheckBoxComponent.scss'

const CheckBox = ({ text }) => {
     return (
          <label className='check-box'>
               <input type={'checkbox'}/>
               {text}
          </label>
     );
}

export default CheckBox;