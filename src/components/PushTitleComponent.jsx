import { MdOutlineWest } from "react-icons/md";
import '../assets/styles/scss/PushTitleComponent.scss'

const PushTitle = ({ navigateTo, text, fontSize }) => {
     return (
          <div className='push-title'>
               <button>
                    <MdOutlineWest size={35} color='#1E1E1E' />
               </button>
               <h1 style={({
                    'fontSize': fontSize
               })}>
                    {text}
               </h1>
          </div>
     );
}

export default PushTitle;