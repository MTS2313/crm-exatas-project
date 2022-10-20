import './styles/Table.scss'
import ButtonPopup from './ButtonPopupSku'
import ModalUpdateSku from '../Modals/UpdateSku'
import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../Context/ModalContext'


const TableSku = ({ schema, data }) => {
    const [popup, setPopup] = useState(null)
    // showModal is relative to its modal, such as delete, view, update, or null
    const {showModal, handleSetShowModal} = useContext(ModalContext)
    const [indexItem, setIndexItem] = useState(null)

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

    const handleClose = () => handleSetShowModal(null)

    const buildRow = (dataItem, index) => {
        return (
            <tr>
                {schema.properties.map((schemaItem) => {
                    return (
                        <td 
                            colSpan={schemaItem.colgap}
                            className={schemaItem.bold && 'bold'}
                            >

                           {dataItem[schemaItem.entityName]}

                        </td>
                    )
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