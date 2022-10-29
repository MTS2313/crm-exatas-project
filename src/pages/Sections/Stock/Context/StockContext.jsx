
import { createContext, useState, useEffect, useContext } from "react"

export const StockContext = createContext()

export const StockContextProvider = ({children}) => {


    // showModal is relative to its modal, such as delete, view, update, or null
    const [showModal, setShowModal] = useState({currentModal: null, previousModal: null})
    const [productIndex, setProductIndex] = useState(null)
    const [skuIndex, setSkuIndex] = useState(null)
    const [imageModal, setImageModal] = useState(null)

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


    const closeImageModal = () => {setImageModal(null)}

    const handleClose = () => handleSetShowModal(null)

    return (
        <StockContext.Provider
                value={{
                    handleSetShowModal,
                    displayPreviousModal,
                    closeImageModal,
                    handleClose,
                    setProductIndex,
                    productIndex,
                    setShowModal,
                    showModal,
                    setImageModal,
                    imageModal, 
                    setSkuIndex,
                    skuIndex
                }}>

            {children}
        </StockContext.Provider>
    )

}


export function useStock(){
    const context = useContext(StockContext)
    const {
            handleSetShowModal,
            displayPreviousModal,
            closeImageModal,
            handleClose,
            setProductIndex,
            productIndex,
            setShowModal,
            showModal,
            setImageModal,
            imageModal,
            setSkuIndex,
            skuIndex
    } = context

    return{
        handleSetShowModal,
        displayPreviousModal,
        closeImageModal,
        handleClose,
        setProductIndex,
        productIndex,
        setShowModal,
        showModal,
        setImageModal,
        imageModal,
        setSkuIndex,
        skuIndex
    }
}