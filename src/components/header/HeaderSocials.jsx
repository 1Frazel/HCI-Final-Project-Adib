import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/m-adib-aulia-nurkhafif-08168a1b0?fbclid=PAAaYiYFTNh7dN8YoOUMATOx9muYxUf29YiY-KxGzms_7-PVGvcsqVonYGfcg_aem_th_ARSwUCXOZvl7sp5avY4boAOApG2liVeFo3Nr7J5cWlLH9XDyvvf5WcxFCIP-JLDNClE" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/adib_nk?igshid=MmIzYWVlNDQ5Yg==" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/AdibNK11/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials