import {options as Icon} from '../../assets/svg/table.jsx'
import {useOutsideAlerter} from '../utils/ClickOutside'
import { useRef } from 'react'

const ButtonPopup = ({
    onView, 
    onDelete, 
    onUpdate, 
    index,
    setPopup, 
    popup}) => {

    function onOptionsClick(){
        if(index != popup) setPopup(index)
        else closePopup()
    }

    const closePopup = () => setPopup(null)

    const wrapperRef1 = useRef(null);
    const wrapperRef2 = useRef(null);
    useOutsideAlerter(wrapperRef1, closePopup, wrapperRef2);

    return ( 
        <div className="buttonPopup">
            {/* -------------- OPTIONS button */}
            <div className="options" ref={wrapperRef2} onClick={onOptionsClick}>
                <Icon />
            </div>
            {/* -------------- OPTIONS container */}
            {popup == index && (
                <div className='containerOptions' ref={wrapperRef1}>
                    {/* ------ On view */}
                    <button className='view' onClick={onView}>
                        Ver
                    </button>
                    {/* ------ On update */}
                    <button className='update' onClick={onUpdate}>
                        Editar
                    </button>
                    {/* ------ On update */}
                    <button className='delete' onClick={onDelete}>
                        Excluir
                    </button>
                </div>
            )}
        </div>
    )

}

export default ButtonPopup