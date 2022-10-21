import Modal from 'react-modal';
import { useState } from 'react';
import '../../../../components/Modal/style/Modal.scss'
import { close as CloseIcon } from '../../../../assets/svg/table.jsx'
import TextField from '@mui/material/TextField';
import FilledButton from '../../../../components/Portfolio/FilledButtonComponent';
import './style/ViewProduct.scss'
import TableSku from '../Table/TableSku';
import  testSkuDataList  from './data/testSkuData';
import schema from "../../../../assets/data/tables/productSku.schema"

Modal.setAppElement('#crmbody');

const ViewProduct = ({ handleClose, show, product }) => {
     const [skuAba, setSkuAba] = useState(0)


     const toggleSkuAba = (i) => setSkuAba(i)


     if(!product) return null;
     
     return (
          <Modal
               isOpen={show}
               className="modal viewProductModal"
               overlayClassName="overlay"
               onRequestClose={handleClose}
               shouldCloseOnOverlayClick={false}>
               <div className="modalContainer">
                    {/* --------------- HEADER */}
                    <div className="modalHeader">
                         <span className="modalTitle">View product</span>
                         <span className="modalCloseIcon" onClick={handleClose}>
                              <CloseIcon />
                         </span>
                    </div>
                    {/* --------------- CONTENT */}
                    <div className="modalBody">
                         <div className="modalContent">
                         <TextField
                              type="text"
                              label="ID"
                              disabled
                              defaultValue={product.id}
                              className="input-s"
                         />
                              <div className='modalContentFields'>
                                   <div className='modalFieldsSelection'>
                                        <div className='viewProductFieldName'>
                                             <p>
                                                  Product name
                                             </p>
                                             <h3>
                                                  {product.name}
                                             </h3>
                                        </div>
                                        <div className='rw'>
                                             <TextField
                                                  type="text"
                                                  label="Marca"
                                                  disabled
                                                  defaultValue={product.brand}
                                                  className="input-s"
                                             />
                                             <TextField
                                                  type="text"
                                                  label="Classificação"
                                                  disabled
                                                  defaultValue={product.category}
                                                  className="input-s"
                                             />
                                        </div>
                                   </div>
                                   <div className='modalFieldsSelection'>
                                        <div className='viewProductFieldDesc'>
                                             <p>
                                                  Description
                                             </p>
                                             <h3>
                                                  {product.description}
                                             </h3>
                                        </div>
                                   </div>
                              </div>

                         </div>
                         <div className="viewProductFooter">
                              <div className='modalSku'>
                                   <div className='modalSkuActions'>
                                        <button onClick={() => { toggleSkuAba(0) }} className={`modalSkuActionButton ${skuAba == 0 && 'active'}`}>SKUs</button>
                                        <button onClick={() => { toggleSkuAba(1) }} className={`modalSkuActionButton ${skuAba == 1 && 'active'}`}>Outros</button>
                                   </div>
                                   <div className='modalSkuBase productSkuModal'>
                                        {skuAba === 0 && <TableSku schema={schema} data={product['list_sku']} />} 
                                        {skuAba === 1 && <h1>Outros</h1>}
                                   </div>
                              </div>
                              <div className='viewProductActions'>
                                   <FilledButton onClick={handleClose} fontColor={'white'} text={'Close'} />
                              </div>
                         </div>
                    </div>
               </div>
          </Modal >
     );
}

export default ViewProduct