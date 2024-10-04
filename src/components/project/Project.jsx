import React from 'react'
import './project.css'

import IMG1 from '../../assets/Web Portfolio.png'
import IMG2 from '../../assets/Insomnomnomnia.png'
import IMG3 from '../../assets/Dark Whisperer.png'
import IMG4 from '../../assets/Kompas Re-Design.png'
import IMG5 from '../../assets/RAISO.png'
import IMG6 from '../../assets/Recipeez.png'

import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    image: IMG1,
    title: 'Web Portfolio',
    skills: 'Skills used: HTML, CSS, ReactJS',
    desc: 'A personal portfolio website designed to showcase my development projects, skills, and experiences. Built using modern web technologies like ReactJS for a seamless user experience, it features responsive design and interactive elements to enhance engagement. ' 
  },
  {
    image: IMG2,
    title: 'Insomnomnomniac',
    skills: 'Skills used: HTML, JavaScript',
    desc: 'A 2D platformer web-based game that challenges player to escape from the labyrinth, dodge the monster and finish the game by reaching bed at the end of labyrinth. This project focuses on interactive gameplay and logic handling using vanilla JavaScript, providing an engaging user experience.' 
  },
  {
    image: IMG3,
    title: 'Dark Whisperer',
    skills: 'Skills used: Game Design',
    desc: 'A concept for a dark, atmospheric game centered around stealth mechanics and immersive storytelling. Involved the creation of a comprehensive game design document, character development, and level design.' 
  },
  {
    image: IMG4,
    title: 'Kompas Re-Design',
    skills: 'Skills used: UI/UX Design',
    desc: 'A redesign of the Kompas news website to enhance user experience and accessibility. The project focused on improving navigation, readability, and aesthetics while maintaining the brands visual identity.' 
  },
  {
    image: IMG5,
    title: 'RAISO Android App',
    skills: 'Skills used: Java, UI/UX Design',
    desc: 'An Android app designed to help users manage their daily tasks efficiently. It features intuitive UI/UX, built-in notifications, and a smooth user experience, coded in Java with a focus on user-centered design.' 
  },
  {
    image: IMG6,
    title: 'Recipeez',
    skills: 'Skills used: Java, UI/UX Design',
    desc: ' A meal planning and recipe-finding app that allows users to input available ingredients and generate recipe suggestions. The app integrates a user-friendly interface with essential Java features to provide an educational experience in real-world API usage. ' 
  }
]


function Project()  {
    return (
      <section id='project'>
        <h5>What I've Done</h5>
        <h2>Projects</h2>
        
        <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable:true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="container project__container">
          {
            data.map(({image, title, skills, desc}, index) => {
              return(
                <SwiperSlide key={index} className='project__item'>
                  <div className='project__item-image'>
                    <img src={image} alt="" />
                  </div>
                  <div className='project__detail'>
                    <h3 className='project__detail-title'>{title}</h3>
                    <h5 className='project__detail-skills'>{skills}</h5>
                    <p className='project__detail-desc'>{desc}</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
      
    )
  }
  export default Project