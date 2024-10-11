import React from 'react'
import './about.css'
import ME from '../../assets/IMG_PP-edit-bg.png'
import {BsAward} from 'react-icons/bs'
import {TbCertificate} from 'react-icons/tb'
import {IoMdArchive} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";

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
              <h4>1 Year Working</h4>
            </article>

            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <h4>11 International Certificates</h4>
            </article>

            <article className='about__card'>
              <IoMdArchive className='about__icon'/>
              <h5>Projects</h5>
              <h4>2 GameDev Projects</h4>
              <br />
              <h4>2 MobileDev Projects</h4>
              <br />
              <h4>1 UI/UX Project</h4>
              <br />
              <h4>1 Website Project</h4>
            </article>
          </div>
          <p>
            Hello! Introducing my name is M. Adib Aulia Nurkhafif, usually called Adib! 
            I'm a 5th semester BINUS student, studying UI/UX, Front End and Mobile Programming.
            <br />
            <br />
            I made several projects during college that are related to the things I study, at the same time I am looking for an opportunity for an internship!
            <br />
            <br />
            Before studying, I also had experience working as a Network Engineer for 1 year and got several certifications in that field, but now I'm trying new opportunities!
          </p>
          <div className='about__social-media'>
            <h3>Checkout My Social Media!</h3>
            <div className='about__social-media-icons'>
              <a href="https://www.linkedin.com/in/m-adib-aulia-nurkhafif" className='btn' target='_blank'><BsLinkedin/><h4>Linked In</h4></a>
              <a href="https://instagram.com/adib_nk?igshid=MmIzYWVlNDQ5Yg=="className='btn' target='_blank'><BsInstagram/><h4>Instagram</h4></a>
              <a href="https://www.facebook.com/AdibNK11/"className='btn' target='_blank'><BsFacebook/><h4>Facebook</h4></a>
              <a href="https://github.com/1Frazel"className='btn' target='_blank'><FaGithub/><h4>Github</h4></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 