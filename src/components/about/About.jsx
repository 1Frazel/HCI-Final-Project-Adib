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
              <h5>Professional Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>11 International Certificates</small>
            </article>

            <article className='about__card'>
              <IoMdArchive className='about__icon'/>
              <h5>Projects</h5>
              <small>2 GameDev Projects</small>
              <br />
              <small>2 MobileDev Projects</small>
              <br />
              <small>1 UI/UX Project</small>
              <br />
              <small>1 Website Project</small>
            </article>
          </div>
          <p>
            Halo! Perkenalkan nama saya M. Adib Aulia Nurkhafif, biasa dipanggil Adib!
            Saya mahasiswa BINUS semester 5, mendalami UI/UX, Front End dan Mobile Programming.
            <br />
            <br />
            Saya membuat beberapa project selama kuliah yang berkaitan dengan hal yang saya dalami,
            sekaligus Saya sedang mencari opportunity untuk tempat magang!
            <br />
            <br />
            Sebelum berkuliah saya juga sempat berpengalaman untuk bekerja menjadi Network Engineer selama
            1 tahun dan mendapat beberapa sertifikasi dibidang tersebut, namun sekarang saya mencoba opportunity baru!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About 