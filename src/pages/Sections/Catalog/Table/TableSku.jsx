import './styles/Table.scss'
import ButtonPopup from './ButtonPopupSku'
import ModalUpdateSku from '../Modals/UpdateSku'
import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../Context/ModalContext'

import {
    MdCameraAlt
} from "react-icons/md";


const TableSku = ({ schema, data }) => {
    const [popup, setPopup] = useState(null)
    const [indexItem, setIndexItem] = useState(null)
    
    const {showModal, handleSetShowModal, setImageModal} = useContext(ModalContext)

    useEffect(() => {
        if(showModal == null) setIndexItem(null)
    }, [showModal])


    // ON DELETE
    const onDelete = (index) => {
        handleSetShowModal(null)
        alert('deleted')
    }

    const displayModal = (modal, index) => {
        setPopup(null)
        setIndexItem(index)
        handleSetShowModal(modal)
    }

    
    const onProductImageClick = (image) => {setImageModal(image)}
    
    

    
    const getProductColor = (rgb) => `rgb(${rgb}, 0.9)`;

    const buildRow = (dataItem, index) => {
        return (
            <tr>
                {schema.properties.map((schemaItem) => {
                    let {entityName} = schemaItem
                    let item = dataItem[entityName]
                    let color = dataItem['color']

                    if(entityName == 'image'){
                        return (
                            <td colSpan={schemaItem.colgap} >
                                <div className="image-color-wrapper">

                                    <div className='product-image' onClick={() => onProductImageClick(item)}>
                                        <div className='shadow active'>
                                            <MdCameraAlt color="#ffffffa6" size={"2rem"} />
                                        </div>

                                        <img 
                                            src={dataItem[entityName]} 
                                            />

                                    </div>
                                        <div className='product-color'>
                                            <div className='color' style={{backgroundColor:getProductColor(color.rgb)}} />
                                            <span>{color.name}</span>
                                        </div>
                                </div>
                            </td>
                        )
                    }
                    else{
                            return (
                                <td 
                                colSpan={schemaItem.colgap}
                                className={schemaItem.bold && 'bold'}
                                >

                                {item}

                                </td>
                            )
                    }
                })}
                <td>
                    <ButtonPopup 
                        onDelete={() => displayModal('delete-sku', index)} 
                        onUpdate={() => displayModal('update-sku', index)} 
                        index={index}
                        popup={popup}
                        setPopup={setPopup}
                        />
                </td>
            </tr>
        )
    }

    return (
        <>

            <table className='tablelayout' cellSpacing="0"> 
                <thead>
                    <tr>
                        {schema.properties.map(({name,colgap}, index) => (
                            <th colSpan={colgap} key={index}>
                                {name}
                            </th>
                        ))}

                        <th key='options'>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => buildRow(item, index))}
                </tbody>
        </table>
        </>
    )
}

export default TableSku