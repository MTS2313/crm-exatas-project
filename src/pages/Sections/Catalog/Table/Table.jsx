import './styles/Table.scss'
import ButtonPopup from './ButtonPopup'
import { useEffect, useState } from 'react'
import ModalViewProduct from '../Modals/ViewProduct'
import ModalUpdateProduct from '../Modals/UpdateProduct'
import ModalUpdateSku from '../Modals/UpdateSku'
import { ModalContext } from '../Context/ModalContext'



const TableLayout = ({ schema, data }) => {

    const [popup, setPopup] = useState(null)
    // showModal is relative to its modal, such as delete, view, update, or null
    const [showModal, setShowModal] = useState(null)
    const [indexItem, setIndexItem] = useState(null)

    useEffect(() => {
        if(showModal == null) setIndexItem(null)
    }, [showModal])


    const displayModal = (modal, index) => {
        setPopup(null)
        setIndexItem(index)

        switch(modal){
            case 'delete':
                setShowModal('delete')
            break;
            case 'view-product':
                setShowModal('view-product')
            break;
            case 'update-product':
                setShowModal('update-product')
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
                        onView={() => displayModal('view-product', index)} 
                        onDelete={() => displayModal('delete-product', index)} 
                        onUpdate={() => displayModal('update-product', index)} 
                        index={index}
                        popup={popup}
                        setPopup={setPopup}
                        />
                </td>
            </tr>
        )
    }

    return (
        <ModalContext.Provider value={{showModal, setShowModal}}>
                {/* -------------------- MODAL ViewProduct */}
                <ModalViewProduct
                    show={showModal == 'view-product'}
                    handleClose={handleClose}
                    />
                {/* -------------------- MODAL UpdateProduct */}
                <ModalUpdateProduct
                    show={showModal == 'update-product'}
                    handleClose={handleClose}
                    />
                {/* -------------------- MODAL UpdateSKU */}
                <ModalUpdateSku 
                    handleClose={handleClose}
                    show={showModal == 'update-sku'}
                    />
                {/* <ModalDeleteProduct
                    show={showModal == 'delete-product'}
                    handleClose={handleClose}
                /> */}

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
        </ModalContext.Provider>
    )
}

export default TableLayout