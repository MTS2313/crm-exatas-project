import './styles/Table.scss'
import ModalConfirmDelete from '../Modais/Table/ConfirmDelete'
import ButtonPopup from './ButtonPopup'
import { useEffect, useState } from 'react'
import ModalViewItem from '../Modais/Table/ViewItem'
import ModalUpdateItem from '../Modais/Table/UpdateItem'


const TableLayout = ({ schema, data }) => {

    const [popup, setPopup] = useState(null)
    // showModal is relative to its modal, such as delete, view, update, or null
    const [showModal, setShowModal] = useState(null)
    const [indexItem, setIndexItem] = useState(null)

    useEffect(() => {
        if(showModal == null) setIndexItem(null)
    }, [showModal])


    // ON DELETE
    const onDelete = (index) => {
        setShowModal(null)
        alert('deleted')
    }

    const displayModal = (modal, index) => {
        setPopup(null)
        setIndexItem(index)

        switch(modal){
            case 'delete':
                setShowModal('delete')
            break;
            case 'view':
                setShowModal('view')
            break;
            case 'update':
                setShowModal('update')
            break;
        }

    }

    const handleClose = () => setShowModal(null)

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
                        onView={() => displayModal('view', index)} 
                        onDelete={() => displayModal('delete', index)} 
                        onUpdate={() => displayModal('update', index)} 
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
        {/* -------------------- MODAL Confirm Delete */}
            <ModalConfirmDelete
                onDelete={onDelete}
                show={showModal == 'delete'}
                handleClose={handleClose}
            />
        {/* -------------------- MODAL View Item */}
            <ModalViewItem
                displayModal={displayModal}
                index={indexItem}
                item={data[indexItem]}
                show={showModal == 'view'}
                handleClose={handleClose}
            />
        {/* -------------------- MODAL Update Item */}
            <ModalUpdateItem
                displayModal={displayModal}
                index={indexItem}
                item={data[indexItem]}
                show={showModal == 'update'}
                handleClose={handleClose}
            />
            <table responsive className='tablelayout' cellSpacing="0"> 
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

export default TableLayout