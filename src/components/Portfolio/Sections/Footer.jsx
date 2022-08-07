import '../../../assets/styles/scss/Portfolio/FooterComponents.scss'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AnchorLogo from '../../AnchorLogo/AnchorLogoComponent';

const Footer = () => {
     return (
          <footer className='footer' >
               <div className='container'>
                    <div className='footer-content'>
                         <div className='footer-header'>
                              <h1 className='footer-header-title'>Your company needs this, let's get started?</h1>
                              <button>
                                   Get start!
                                   <MdOutlineArrowRightAlt color='#2A7FFA' size={35} />
                              </button>
                         </div>
                         <div className='footer-content-selection'>
                              <div className='footer-content-title'>
                                   <div className='footer-content-index'>
                                        <AnchorLogo textColor={'#fff'} anchorFill={'#212832'} iconBackground={'#fff'} />
                                        <p className='paragraph'>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                                        </p>
                                   </div>
                              </div>
                              <div className='footer-content-links'>
                                   <div className='footer-content-index'>
                                        <h1 className='hypper-text'>Navigation</h1>
                                        <div className='footer-content-index-links'>
                                             <p>Home</p>
                                             <p>About-us</p>
                                             <p>Prices</p>
                                        </div>
                                   </div>
                                   <div className='footer-content-index'>
                                        <h1 className='hypper-text'>Get start</h1>
                                        <div className='footer-content-index-links'>
                                             <p>Login</p>
                                             <p>Create account</p>
                                        </div>
                                   </div>
                                   <div className='footer-content-index' id='contact'>
                                        <h1 className='hypper-text'>Contact-us</h1>
                                        <div className='footer-content-index-links'>
                                             <p>email@email.com</p>
                                             <p>(12) 98765-3210</p>
                                             <p>@linkedin</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='rights'>
                              <p className='paragraph'>
                                   © 2022 Anchor. All rights reserved.
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;