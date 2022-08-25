import Modal from 'react-modal';
import '../../../../components/Modal/style/Modal.scss'
import { close as CloseIcon } from '../../../../assets/svg/table.jsx'
import ModalIDTextField from '../../../../components/Modal/ModalTextField/ModalIDTextField';
import ModalTextField from '../../../../components/Modal/ModalTextField/ModalTextField';
import FilledButton from '../../../../components/Portfolio/FilledButtonComponent';
import './style/ViewProduct.scss'
import TableLayout from '../../../../components/Table/Table';
import { testSkuDataList } from './data/testSkuData';
import schema from "../../../../assets/data/tables/productSku.schema"
const ViewProduct = ({ handleClose }) => {

     return (
          <Modal
               isOpen={true}
               className="modal viewProductModal"
               overlayClassName="overlay"
               onRequestClose={handleClose}
               shouldCloseOnOverlayClick={false}
          >
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
                              <ModalIDTextField placeholder={'1'} disabled inputName={'Id'} width={'150px'} />
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
                                             <ModalTextField placeholder={'Ipsum'} inputName={'Marca'} disabled />
                                             <ModalTextField placeholder={'Lorems'} inputName={'Classificação'} disabled />
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
                                        <button className='modalSkuActionButton active'>SKUs</button>
                                        <button className='modalSkuActionButton'>Outros</button>
                                   </div>
                                   <div className='modalSkuBase'>
                                        <TableLayout schema={schema} data={testSkuDataList}/>
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

export default ViewProduct;