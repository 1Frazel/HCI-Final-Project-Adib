import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/adib.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>M. Adib Aulia Nurkhafif</h1>
        <h5 className="text-light">
          Undergraduate Computer Science BINUS University
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header