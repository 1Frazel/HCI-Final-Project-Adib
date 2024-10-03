import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
import LOGO1 from '../../assets/Logo-adib.png'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'> <img src={LOGO1} alt="logo" /></a>

      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Skills</a></li>
         <li><a href="#certificates">Certification</a></li>
         <li><a href="#service">Service</a></li>
         <li><a href="#portfolio">Professional Experience</a></li>
         <li><a href="#project">Project</a></li>
         <li><a href="#creation">Creation</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/AdibNK11/" target='_blank'><AiFillFacebook/></a>
        <a href="https://instagram.com/adib_nk?igshid=MmIzYWVlNDQ5Yg==" target='_blank'><AiFillInstagram/></a>
        <a href="https://twitter.com/nk_adib" target='_blank'><AiFillTwitterSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Adib Aulia. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer