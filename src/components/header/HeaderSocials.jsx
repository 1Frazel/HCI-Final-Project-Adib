import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import './header.css'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/m-adib-aulia-nurkhafif" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/adib_nk?igshid=MmIzYWVlNDQ5Yg==" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/AdibNK11/" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/1Frazel"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials