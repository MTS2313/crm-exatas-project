import './styles/TextButtonComponent.scss'
import { Link } from 'react-router-dom'

const TextButton = ({ text, href, fontColor, removeDecoration }) => {

     return (
          <Link to={href} className='text-button' style={{ 'color': fontColor, 'textDecoration': removeDecoration ? 'none' : 'underline' }}>
               {text}
          </Link>
     );
}

export default TextButton;