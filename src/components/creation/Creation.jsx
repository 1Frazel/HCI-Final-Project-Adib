import React from 'react'
import './creation.css'
import myPortfolio from '../../assets/B INDO PORTO MUHAMMAD AULIA NURKHAFIF_3.pdf'


import buku1 from '../../assets/HOW TO BASIC MTCNA 100% FIX.pdf'
import buku2 from '../../assets/HOW TO BASIC-MTCRE 100_ FIX.pdf'
import buku3 from '../../assets/HOW TO BASIC CCNA ENTERPRISE.pdf'
import buku4 from '../../assets/FORBIDDEN REDHAT.pdf'
import buku5 from '../../assets/NETWORK FUNDAMENTAL E-MODUL.pdf'
import buku6 from '../../assets/Subnetting Modul.pdf'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
    {
        title: 'How To Basic: MTCNA',
        buku: buku1,
        desc: 'Buku yang lengkap menjelaskan semua materi MTCNA, mulai dari akses dasar MikroTik, Dasar Firewall, Dasar Nirkabel hingga hotspot dll. Ada lebih dari 50+ lab MTCNA!',
    },
    {
        title: 'How To Basic: MTCRE',
        buku: buku2,
        desc: 'Buku yang lengkap menjelaskan semua materi MTCRE, mulai dari konsep perutean, lalu perutean statis, perutean dinamis hingga tunnel dll. Ada lebih dari 35+ Lab MTCRE!'
    },
    {
        title: 'How To Basic: CCNA Enterprise',
        buku: buku3,
        desc: 'Buku yang lengkap menjelaskan tentang semua materi CCNA Enterprise, CCNA versi terbaru, mulai dari switching, lalu routing dan juga ada IPv6 basic, dan lain-lain. Ada lebih dari 50+ CCNA Enterprise Labs!', 
    },
    {
        title: 'Forbidden Redhats',
        buku: buku4,
        desc: 'Buku yang membahas mengenai server Redhat, mulai dari instalasi server, hingga menambahkan beberapa service yang tersedia pada server Redhat, semua dibahas disini!',

    },
    {
        title: 'Network Fundamental Modul',
        buku: buku5,
        desc: 'Modul ini membahas mengenai fundametal dari jaringan, seperti penjelasan jaringan itu apa, bagaimana sejarah dan asal-usulnya, serta banyak membahas istilah-istilah yang ada didalam dunia jaringan'
    },
    {
        title: 'Subnetting Modul',
        buku: buku6,
        desc: 'Modul ini membahas topik penting dalam dunia jaringan yakni Subnetting, mengenai penjelasannya, cara menghitung beserta teknik paling efektifnya'
    }
]

function creation()  {
    return (
      <section id='creation'>
        <h5>What I've Wrote</h5>
        <h2>Creations</h2>
        
        <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable:true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="container creation__container">
          {
            data.map(({image, title, buku, desc}, index) => {
              return(
                <SwiperSlide key={index} className='creation__item'>
                  <div className='creation__item-image'>
                    <img src={image} alt="" />
                  </div>
                  <div className='creation__detail'>
                    <h3 className='creation__detail-title'>{title}</h3>
                    <p className='creation__detail-desc'>{desc}</p>
                    <div className='creation__detail-btn'>
                        <a href={buku} className='btn'>Download Book</a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="portfolio__download-desc">
        <h3>Download My Complete Portfolio!</h3>
      </div>
      <div className="portfolio__download">
        <a href={myPortfolio} className='btn'>My Complete Portfolio</a>
      </div>
      </section>
      
    )
  }
  export default creation
