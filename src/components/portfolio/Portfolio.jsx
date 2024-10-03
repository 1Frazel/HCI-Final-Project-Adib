import React, { useRef, useState } from "react";


import './portfolio.css'
import IMG1 from '../../assets/Project-1.png'
import IMG2 from '../../assets/Project-2.png'
import IMG3 from '../../assets/Project-3.png'
import IMG4 from '../../assets/Project-4.png'
import IMG5 from '../../assets/Project-5.png'
import IMG6 from '../../assets/Project-6.png'
import IMG7 from '../../assets/Project-7.png'
import IMG8 from '../../assets/Project-8.png'

import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    image: IMG1,
    title: 'Replacement Firewall Palo Alto PT. Mega Eltra',
    info: 'Project pertama saya adalah replacement firewall, dimana saya dan atasan saya terjun ke PT. Mega Eltra Pupuk Indonesia didaerah Jatiwaringin Jakarta Timur, untuk instalasi sekaligus replacement perangkat. Perangkat yang akan di replace adalah firewall Palo Alto 3200 series. Pekerjaan saya pada saat project adalah melakukan konfigurasi pada perangkat Mikrotik agar terintegrasi dengan perangkat firewall Palo Alto yang baru saja kita instalasi. Konfigurasi yang saya lakukan adalah integrasi pada IP Address, lalu melakukan pemetaan VLAN agar Palo Alto bisa terintegrasi pada semua switch diseluruh lantai serta menstabilkan jalur VPN.'
  },
  {
    image: IMG2,
    title: 'Instalasi AP Dan Survey Fiber Optic PT. ASDP Merak',
    info: 'Project kedua saya berada didaerah Pelabuhan Merak di Cilegon. Kali ini saya akan melakukan instalasi Ruckus Wireless Zoneflex R320 dikapal ferry yang melintas ke Lampung di Dermaga Ekslusif Merak. Jadi saya dan atasan saya ikut naik kekapal ferry sambil melakukan instalasi perangkat jaringan, setelah selesai di sore hari karena kita harus mengikuti perjalanan pulang pergi Merak-Lampung, malamnya kita ke kantor PT. ASDP Indonesia Ferry untuk melakukan pemetaan topologi dan survey Fiber Optik by remote hingga larut malam, dan dilanjut menginap di hotel. Kemudian esok paginya, kita melanjutkan survey Fiber Optik dengan langsung turun kelapangan, hingga sore hari. Setelah selesai kami pulang ke Jakarta.'
  },
  {
    image: IMG3,
    title: 'Upgrade Instalasi Switch Ruckus PT. ASDP Bitung',
    info: 'Project ketiga saya dilakukan by remote, saya diberi arahan oleh atasan saya untuk melakukan upgrade pada perangkat Ruckus ICX Series yang akan dikirim ke Bitung, konfigurasi yang saya lakukan yaitu melakukan upgrade pada firmware, serta melakukan konfigurasi VLAN sesuai arahan yang diberikan, saya melakukan konfigurasi ini pada 8 perangkat yang sama, setelah selesai konfigurasi perangkat dibungkus kembali sebelum akan dikirim ketujuan.'
  },
  {
    image: IMG4,
    title: 'Upgrade Instalasi Switch Ruckus & MikroTik CCR PT. Rajawali Nusindo',
    info: 'Project keempat saya dilakukan by remote, saya diberi tugas oleh atasan saya untuk melakukan upgrade pada perangkat Ruckus ICX Series dan Mikrotik CCR, konfigurasi yang saya lakukan hanya melakukan upgrade pada firmware, serta melakukan konfigurasi VLAN sesuai arahan yang diberikan, saya melakukan konfigurasi ini pada 6 perangkat yang sama. setelah selesai konfigurasi perangkat dibungkus kembali sebelum akan dikirim ketujuan.'
  },
  {
    image: IMG5,
    title: 'Upgrade Instalasi Switch & AP Ruckus DPR RI',
    info: 'Project kelima saya terbagi menjadi 2 tahap. Pertama-tama saya dan atasan saya melakukan upgrade dan konfigurasi VLAN pada perangkat Ruckus ICX series sebelum akhirnya dikirim ke DPR RI untuk dilakukan instalasi. Kedua, setelah selesai melakukan upgrade, kami kemudian melakukan instalasi dengan terjun langsung ke DPR RI. Setelah briefing dengan pihak IT DPR, kami melakukan replacement perangkat Juniper dengan Perangkat Ruckus ICX dibeberapa data box yang tersebar digedung DPR, dan setelah itu, kami juga melakkan instalasi Ruckus Wireless Zoneflex diberbagai departemen pada digedung DPR.'
  },
  {
    image: IMG6,
    title: 'Preventive Maintenance Switch Ruckus & Avaya Kemenhub RI',
    info: 'Project keenam saya hanya melakukan maintenance pada perangkat jaringan di Kementrian Perhubungan RI, disana saya mengecek kondisi perangkat di Kementrian, ada switch Ruckus dan switch Avaya, saya cek kondisi fisik router, seperti suhu, lampu LED. Kemudian mengecek konfigurasi apakah ada yang berubah atau kurang, lalu memastikan perangkat tetap terintegrasi, dan kemudian testing pada end-user untuk memastikan tidak ada kendala.'
  },
  {
    image: IMG7,
    title: 'SD-WAN Alfamart',
    info:  'SD-WAN Alfa merupakan megaproject yang sedang digarap oleh perusahaan MTM saat saya magang disana, karena pada project ini, MTM melakukan kolaborasi dengan ICON+ pada segi infrastruktur MPLS. Dan pada megaproject ini, kita melakukan instalasi pada 3000+ store Alfamart dan ratusan store Alfamidi di seluruh penjuru Indonesia. Saat project, saya mengerjakan 3 hal: Pre-Config: Melakukan fresh configuration pada produk Fortigate sesuai dengan ketentuan, seperti konfigurasi MPLS, GSM, dll. Sebelum akhirnya perangkat dikirim ke store Alfa dipenjuru Indonesia Remote Instalasi: Setelah akhirnya perangkat tersebut sampai, kita akan melakukan remote instalasi dengan Tim Onsite ICON+, agar perangkat Fortigate tersebut bisa terhubung ke Server Alfa, dan SD-WAN dapat berjalan dengan lancar Optimasi: Optimasi hanya dilakukan jika terjadi kendala/problem pada SD-WAN, agar SD-WAN bisa berjalan dengan lancar kembali. '
  },
  {
    image: IMG8,
    title: 'Implementasi Security Branch BRI',
    info: <p> Project kali ini merupakan implementasi dalam meningkatkan keamanan jaringan pada kantor BRI.
          BRI sendiri memiliki 3 jenis kantor ada KCP (Kantor Cabang Pembantu) ditingkat paling bawah, lalu ada KC (Kantor Cabang) ditingkat menengah, dan ada KK (Kantor Kanwil) yang merupakan pusat jaringan BRI didaerah tersebut. Dan pada projek kali ini, saya dan team ditugaskan untuk melakukan instalasi Fortigate pada beberapa kantor KCP dan KC yang tersebar didaerah jabodetabek dan Banten, dan sementara saya mendapat jatah untuk melakukan instalasi di 9 KCP, dan 1 KC.
          Pada projek kali ini saya melakukan 3 hal saat instalasi: 
          1. Saat pertama kali tiba di site, yang yang saya lakukan adalah survey topologi kantor BRI tersebut. Jaringan BRI terdapat 2 macam, Intranet dan Internet, dan kita harus mengetahui secara detail topologi dari kedua jaringan tersebut. 
          2. Start Instalasi Intranet/Internet Setelah selesai melakukan survey dan menganalisa topologi, barulah kita mulai start untuk menambahkan perangkat Fortigate ke jaringan yang nantinya Fortigate ini akan menjadi firewall jaringan Intranet dan Internet kantor tersebut. 
          3. Dokumentasi selesai melakukan instalasi,saya cek kembali semua fasilitas, sistem, dan aplikasi BRI, serta internet disana, apakah sudah bisa digunakan kembali dan traffic sudah melewati Fortigate, jika sudah maka implementasi sudah berhasil.'</p> 
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Work Experiences</h5>
      <h2>Professional Experiences</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}

        className="container portfolio__container">
          {
          data.map(({image, title, info}, index) => {
            return (
              <SwiperSlide key={index} className='portfolio__item '>
          <div className="portfolio__item-image">
            <img src={image}/>
          </div>
          <div className="portfolio__desc">
            <h3 className='portfolio__title'>{title}</h3>
            <p className='portfolio__info'>{info}</p>
          </div>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio