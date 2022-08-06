import '../../assets/styles/scss/TextButtonComponent.scss'
import { Link } from 'react-router-dom'

const TextButton = ({ text, href }) => {

     return (
          <Link to={href} className='text-button'>
                    {text}
          </Link>
     );
}

export default TextButton;