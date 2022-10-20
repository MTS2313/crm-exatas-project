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
    const [showModal, setShowModal] = useState({currentModal: null, previousModal: null})
    const [productIndex, setProductIndex] = useState(null)

    useEffect(() => {
        if(showModal == null) setProductIndex(null)
    }, [showModal])



    function handleSetShowModal(modal){
        setShowModal((e) => {
            let newShowModal = {
                currentModal: modal,
                previousModal: e.currentModal
            }
            return newShowModal
        })
    }

    function displayPreviousModal(){
        setShowModal((e) => {
            let newShowModal = {
                currentModal: e.previousModal, 
                previousModal: null
            }
            return newShowModal
        })
    }

    const displayModal = (modal, index) => {
        setPopup(null)
        setProductIndex(index)
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
        // MODAL PROVIDER
        <ModalContext.Provider value={{showModal, setShowModal, handleSetShowModal, displayPreviousModal}}>
                {/* -------------------- MODAL ViewProduct */}
                <ModalViewProduct
                    show={showModal.currentModal == 'view-product'}
                    product={data[productIndex]}
                    handleClose={handleClose}
                    />
                {/* -------------------- MODAL UpdateProduct */}
                {/* <ModalUpdateProduct
                    show={showModal == 'update-product'}
                    handleClose={handleClose}
                    /> */}
                {/* -------------------- MODAL UpdateSKU */}
                <ModalUpdateSku 
                    handleClose={handleClose}
                    handlePreviousModal={displayPreviousModal}
                    show={showModal.currentModal == 'update-sku'}
                    />
                {/* <ModalDeleteProduct
                    show={showModal == 'delete-product'}
                    handleClose={handleClose}
                /> */}

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
        </ModalContext.Provider>
    )
}

export default TableLayout