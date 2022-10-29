import Modal from 'react-modal';
import { useState } from 'react';
import '../../../../components/Modal/style/Modal.scss'
import { close as CloseIcon } from '../../../../assets/svg/table.jsx'
import ModalIDTextField from '../../../../components/Modal/ModalTextField/ModalIDTextField';
import ModalTextField from '../../../../components/Modal/ModalTextField/ModalTextField';
import FilledButton from '../../../../components/Portfolio/FilledButtonComponent';
import './style/ViewProduct.scss'
import TableLayout from '../../../../components/Table/Table';
import  testSkuDataList  from './data/testProductData';
import schema from "../../../../assets/data/stock/productSku.schema"

Modal.setAppElement('#crmbody');

const UpdateProduct = ({ handleClose, show }) => {
     const [skuAba, setSkuAba] = useState(0)

     const toggleSkuAba = (i) => setSkuAba(i)

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
                              <ModalIDTextField placeholder={'1'}  inputName={'Id'} width={'150px'} />
                              <div className='modalContentFields'>
                                   <div className='modalFieldsSelection'>
                                        <div className='viewProductFieldName'>
                                             <p>
                                                  Product name
                                             </p>
                                             <h3>
                                                  Lorem ipsum dolor sit amet
                                             </h3>
                                        </div>
                                        <div className='rw'>
                                             <ModalTextField placeholder={'Ipsum'} inputName={'Marca'}  />
                                             <ModalTextField placeholder={'Lorems'} inputName={'Classificação'}  />
                                        </div>
                                   </div>
                                   <div className='modalFieldsSelection'>
                                        <div className='viewProductFieldDesc'>
                                             <p>
                                                  Description
                                             </p>
                                             <h3>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet interdum lectus, et maximus eros. Integer aliquam interdum sodales
                                             </h3>
                                        </div>
                                   </div>
                              </div>

                         </div>
                         <div className="viewProductFooter">
                              <div className='modalSku'>
                                   <div className='modalSkuActions'>
                                        <button onClick={() => { toggleSkuAba(0) }} className={skuAba === 0 ? 'modalSkuActionButton active' : 'modalSkuActionButton'}>SKUs</button>
                                        <button onClick={() => { toggleSkuAba(1) }} className={skuAba === 1 ? 'modalSkuActionButton active' : 'modalSkuActionButton'}>Outros</button>
                                   </div>
                                   <div className='modalSkuBase'>
                                        {
                                             skuAba === 0 ? <TableLayout schema={schema} data={testSkuDataList} /> : <h1>Outros</h1>
                                        }
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

export default UpdateProduct