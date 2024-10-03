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
    skills: 'Skills used: HTML, CSS, React',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' 
  },
  {
    image: IMG2,
    title: 'Insomnomnomniac',
    skills: 'Skills used: HTML, JavaScript',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' 
  },
  {
    image: IMG3,
    title: 'Dark Whisperer',
    skills: 'Skills used: Game Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' 
  },
  {
    image: IMG4,
    title: 'Kompas Re-Design',
    skills: 'Skills used: UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' 
  },
  {
    image: IMG5,
    title: 'RAISO Android App',
    skills: 'Skills used: Java, UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' 
  },
  {
    image: IMG6,
    title: 'Recipeez',
    skills: 'Skills used: Java, UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' 
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