import AnchorLogo from "../AnchorLogo/AnchorLogoComponent";
import './styles/PortifolioNavBarComponent.scss'
import FilledButton from "./FilledButtonComponent";
import { MdMenu, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from "react";

const PortfolioNavBar = () => {

     let [menu, setMenu] = useState('nav-bar')

     const toggleMenu = () => {
          menu === 'nav-bar' ? setMenu((menu = 'nav-bar active')) : setMenu((menu = 'nav-bar'))
     }

     return (
          <>
               <header className='header'>
                    <div className="logo-bg-header" />
                    <div className='header-container'>
                         <nav className="navigation">
                              <AnchorLogo className='mobile' textSize={'2rem'} iconBackground={'#2A7FFA'} anchorFill={'#fff'} textColor={'#2A7FFA'} />
                              <ul className={menu}>
                                   <MdClose className="close-menu" onClick={() => { toggleMenu() }} size={35} color={'#212832'} />
                                   <a href={'#'} onClick={() => setMenu((menu = 'nav-bar'))}><li className="link main">Home</li></a>
                                   <a href={'#aboutus'} onClick={() => setMenu((menu = 'nav-bar'))}><li className="link main">About-us</li></a>
                                   <a href={'#prices'} onClick={() => setMenu((menu = 'nav-bar'))}><li className="link main">Prices</li></a>
                                   <a href={'#contact'} onClick={() => setMenu((menu = 'nav-bar'))}><li className="link main">Contact-us</li></a>
                                   <Link to='/signin'><li className="link underline submain">Login</li></Link>
                                   <Link to='/signup'><FilledButton className='submain' fontColor={menu === 'nav-bar active' ? 'white' : '#2A7FFA'} backgroundColor={menu === 'nav-bar active' ? '' : 'white'} text={'Create Account'} /></Link>
                              </ul>
                              <div className='menu' >
                                   <MdMenu onClick={() => { toggleMenu() }} size={35} color={'#fff'} />
                              </div>
                         </nav>
                    </div>
               </header>
          </>
     );
}

export default PortfolioNavBar;