import React from 'react'
import './about.css'
import ME from '../../assets/IMG_PP-edit-bg.png'
import {BsAward} from 'react-icons/bs'
import {TbCertificate} from 'react-icons/tb'
import {IoMdArchive} from 'react-icons/io'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>10 International Certificates</small>
            </article>

            <article className='about__card'>
              <IoMdArchive className='about__icon'/>
              <h5>Projects</h5>
              <small>8 Network Engineering Projects</small>
            </article>
          </div>
          <p>
            Halo! Perkenalkan namaku M. Adib Aulia Nurkhafif, biasa dipanggil Adib!
            Aku lulusan dari SMK IDN Bogor, dan sekarang melanjutkan studi di BINUS University dengan jurusan Computer Science!
            Sekarang aku tinggal di Jln. Kresna No.43, Kel. Arjuna, Kota Bandung
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About 