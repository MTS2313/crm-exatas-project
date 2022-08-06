import TextField from "../../components/TextFieldComponent";
import '../../assets/styles/scss/AuthPageComponent.scss'
import { MdEmail, MdLock } from 'react-icons/md'
import CheckBox from "../../components/CheckBoxComponent";
import RaisedButton from "../../components/RaisedButtonComponent";
import TextButton from "../../components/TextButtonComponent";

const Login = () => {
     return (
          <main className="auth-page">
               <section className="auth-page-container">
                    <div className="auth-page-content">
                         <h1 className='auth-title'>
                              Login
                         </h1>
                         <p className="auth-paragrath">
                              Se ja possui uma conta, conecte-se com seu email e senha.
                         </p>
                         <form className={'auth-form-area'}>
                              <div className={'auth-text-field-area'}>
                                   <TextField placeholder={'Email'} icon={<MdEmail size={25} color={'#5D5D5D'} />} />
                                   <TextField placeholder={'Senha'} icon={<MdLock size={25} color={'#5D5D5D'} />} />
                                   <CheckBox text={'Lembrar email'} />
                              </div>
                              <RaisedButton text={"Entrar"} />
                              <TextButton text={'Criar conta'} />
                         </form>
                    </div>
               </section>
          </main >
     );
}

export default Login;