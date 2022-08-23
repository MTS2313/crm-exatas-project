import { MdOutlineWest } from "react-icons/md";
import './styles/PushTitleComponent.scss'

const PushTitle = ({ navigateTo, text, fontSize, href }) => {
     return (
          <div className='push-title'>
               <a href={href}> 
                    <MdOutlineWest size={35} color='#1E1E1E' />
               </a>
               <h1 style={({
                    'fontSize': fontSize
               })}>
                    {text}
               </h1>
          </div>
     );
}

export default PushTitle;