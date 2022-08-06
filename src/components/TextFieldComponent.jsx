import '../assets/styles/scss/TextFieldComponent.scss'

const TextField = ({ icon, placeholder }) => {
     return (
          <div className='text-field'>
               {icon}
               <input className='text-field-input' placeholder={placeholder} />
          </div>
     );
}

export default TextField;