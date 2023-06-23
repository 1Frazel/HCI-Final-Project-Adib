import React, { useRef } from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLine} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_98zvy3y', 'template_83t6kxr', form.current, 'qkYHUAd9cmK7BjIFb');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me On</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adibnk11@gmail.com</h5>
            <a href="mailto:adibnk11@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLine className='contact__option-icon'/>
            <h4>Line</h4>
            <h5>adibnk11</h5>
            <a href="https://line.me/ti/p/ldL_KNuTsq" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+6282241033809</h5>
            <a href="https://wa.me/6282241033809" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTION  */}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <label>Email</label>
          <input type="email" name='email' placeholder='Your Email' required/>
          <label>Messages</label>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" value="Send" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact