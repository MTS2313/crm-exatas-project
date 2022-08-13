import '../../../assets/styles/scss/CRMPages/Dashboard.scss'
import FilledButton from '../../Portfolio/FilledButtonComponent';
import { MdOutlineFeed, MdOutlineSearch } from 'react-icons/md'
import TextField from '../../Auth/TextFieldComponent';
import CounterCards from '../CRMComponents/CounterCards';
import { contasPagar, contasReceber } from '../../../assets/data/psdata.crmdashboard';

const DashboardScreen = () => {
     return (
          <section className='crmSection'>
               <div className='dashboard'>
                    <div className='crmContainer'>
                         <div className='crmHeader'>
                              <h1 className='crmPathName'>
                                   DASHBOARD
                              </h1>
                              <div className='crmHeaderActions'>
                                   <TextField placeholder={'Pesquise'} icon={<MdOutlineSearch size={35} color={'#2A7FFA'} />} />
                                   <FilledButton text={'Relatorio'} fontColor={'white'} icon={<MdOutlineFeed size={25} />} />
                              </div>
                         </div>

                    </div>
                    <CounterCards data={contasPagar} />
                    <CounterCards data={contasReceber} />
               </div>
          </section>
     );
}

export default DashboardScreen;