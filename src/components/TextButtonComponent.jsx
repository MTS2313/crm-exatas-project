import '../assets/styles/scss/TextButtonComponent.scss'

const TextButton = ({ text }) => {

     return (
          <button className='text-button'>
               {text}
          </button>
     );
}

export default TextButton;