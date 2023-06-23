import React from 'react'
import './service.css'

const Service = () => {
  return (
    <section id='service'>
      <h5>Things That I Will Do</h5>
      <h2>Services</h2>

        <div className="container service__container">
          <div className="service__networking">
            <h3>Networking Service</h3>
            <div className="service__content">
              <article className='service__detail'>
                <div>
                  <h4>Desain dan konfigurasi jaringan menggunakan perangkat Cisco, MikroTik, Fortinet, Ruckus, Ubiquiti, dan lainnya.</h4>
                </div>
                <div>
                  <h4>Instalasi dan pemeliharaan perangkat jaringan.</h4>
                </div>
                <div>
                  <h4>Peningkatan kinerja jaringan dan keamanan.</h4>
                </div>
                <div>
                  <h4>Penyelesaian masalah jaringan dan pemulihan kesalahan.</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="service__programming">
            <h3>Programming Service</h3>
            <div className="service__content">
              <article className='service__detail'>
              <div>
                  <h4>Pengembangan aplikasi atau sistem menggunakan bahasa pemrograman C, Python, HTML, JavaScript, CSS, dan React.</h4>
                </div>
                <div>
                  <h4>Pembuatan website responsif dan menarik.</h4>
                </div>
                <div>
                  <h4>Integrasi sistem dan pengolahan data.</h4>
                </div>
                <div>
                  <h4>Pemecahan masalah dan debugging kode.</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Service