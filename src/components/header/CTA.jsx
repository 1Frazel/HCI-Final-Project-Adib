import React from 'react'
import CV from '../../assets/CV MUHAMMAD ADIB AULIA NURKHAFIF -.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>My CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
    </div>
  )
}

export default CTA