import React from 'react'
import CV from '../../assets/CV M ADIB AULIA NURKHAFIF 10-2024.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>My CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
    </div>
  )
}

export default CTA