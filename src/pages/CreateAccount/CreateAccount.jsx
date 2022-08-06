import TextField from "../../components/TextFieldComponent";
import '../../assets/styles/scss/AuthPageComponent.scss'
import { MdEmail, MdOutlineCheck, MdOutlineArrowForwardIos, MdLock, MdOutlineArrowBackIos, MdOutlineApartment, MdPerson, MdFolderShared } from 'react-icons/md'
import PushTitle from "../../components/PushTitleComponent";
import SquareButton from "../../components/SquareButtonComponent";
import { useState } from "react";
import Ratio from "../../components/RatioComponent";

const iconSize = 35

const CreateAccount = () => {
     let [current, setCurrent] = useState(0)

     const toggleForward = () => {
          current >= createAccountList.length - 1 ? setCurrent((current = 2)) : setCurrent((current = current + 1))
     }
     const toggleBackward = () => {
          current === 0 ? setCurrent((current = 0)) : setCurrent((current = current - 1))
     }

     return (
          <main className="auth-page">
               <section className="auth-page-container">
                    <div className='progress-bar'>
                         <div className='progress-bar-completed'
                              style={
                                   (
                                        {
                                             'width': current === 0 ? '20%' : current === 1 ? '70%' : current === 2 ? '100%' : '',
                                             'borderRadius': current === 0 ? '' : current === 1 ? '' : current === 2 ? '8px 8px 0 0' : '',
                                             'backgroundColor': current === 0 ? '' : current === 1 ? '' : current === 2 ? '#73D57D' : ''
                                        }
                                   )
                              }
                         />
                    </div>
                    <div className="auth-page-content">
                         <PushTitle text={'Create Account'} />
                         {createAccountList.map((item, index) => {
                              return <p key={index} className={index === current ? 'auth-paragrath active' : 'inactive'}>{item.desc}</p>
                         })}
                         <form className={'auth-form-area'}>
                              {createAccountList.map(
                                   (item, index) => {
                                        return <div key={index} className={index === current ? 'active ' : 'inactive'}>{item.data} </div>
                                   })}
                         </form>
                         <div className='auth-actions' style={({ 'justifyContent': current === 0 ? 'end' : 'space-between' })} >
                              {current === 0 ? <></> : <SquareButton onClick={() => toggleBackward()} style={({ 'backgroundColor': '#EFEFEF' })} icon={<MdOutlineArrowBackIos size={35} color={'#1E1E1E'} />} />}
                              <SquareButton onClick={() => toggleForward()} style={({ 'alignSelf': 'flex-start', 'backgroundColor': current === 2 ? '#73D57D' : '' })} icon={current === 2 ? <MdOutlineCheck size={35} color={'white'} /> : <MdOutlineArrowForwardIos size={35} color={'white'} />} />
                         </div>
                    </div >
               </section>
          </main >
     );
}

export const CreateAccount1 = () => {
     return <>
          <div className={'auth-text-field-area'}>
               <TextField placeholder={'Nome da sua empresa'} icon={<MdOutlineApartment size={iconSize} color={'#5D5D5D'} />} />
               <TextField placeholder={'Seu Nome'} icon={<MdPerson size={iconSize} color={'#5D5D5D'} />} />
          </div>
     </>
}

export const CreateAccount2 = () => {
     return <>
          <div className={'auth-text-field-area'}>
               <div className="ratio-selectio">
                    <Ratio text={'CPF'} name={'pss'} />
                    <Ratio text={'CNPJ'} name={'pss'} />
               </div>
               <TextField placeholder={'CPF/CNPJ'} icon={<MdFolderShared size={iconSize} color={'#5D5D5D'} />} />
          </div>

     </>
}
export const CreateAccount3 = () => {
     return <>
          <div className={'auth-text-field-area'}>
               <TextField placeholder={'Email'} icon={<MdEmail size={iconSize} color={'#5D5D5D'} />} />
               <TextField placeholder={'Senha'} icon={<MdLock size={iconSize} color={'#5D5D5D'} />} />
               <TextField placeholder={'Confirmar senha'} icon={<MdLock size={iconSize} color={'#5D5D5D'} />} />
          </div>
     </>
}

export const createAccountList = [
     {
          desc: 'Qual o nome de sua empresa?',
          data: <CreateAccount1 />
     },
     {
          desc: 'Nos informe seu CNPJ/CPF.',
          data: <CreateAccount2 />
     },
     {
          desc: 'Por fim, nos informe informções para seu login em nosso painel.',
          data: <CreateAccount3 />
     }
]

export default CreateAccount;