import { MdOutlineFeed, MdOutlineSearch } from "react-icons/md";
import TextField from "../../Auth/TextFieldComponent";
import FilledButton from "../../Portfolio/FilledButtonComponent";
import '../../../assets/styles/scss/CRMPages/Vendas.scss'

const VendasScreen = () => {
     return (
          <section className="crmSection">
               <div className='vendas'>
                    <div className='crmContainer'>
                         <div className='crmHeader'>
                              <h1 className='crmPathName'>
                                   <font>VENDAS</font>/VENDAS
                              </h1>
                              <div className='crmHeaderActions'>
                                   <TextField placeholder={'Pesquise'} icon={<MdOutlineSearch size={35} color={'#2A7FFA'} />} />
                                   <FilledButton text={'Relatorio'} fontColor={'white'} icon={<MdOutlineFeed size={25} />} />
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     );
}

export default VendasScreen;