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
                  <h4>Network design and configuration using Cisco, MikroTik, Fortinet, Ruckus, Ubiquiti, and other devices.</h4>
                </div>
                <br />
                <div>
                  <h4>Installation and maintenance of network devices.</h4>
                </div>
                <br />
                <div>
                  <h4>Network performance and security improvement.</h4>
                </div>
                <br />
                <div>
                  <h4>Network troubleshooting.</h4>
                </div>
              </article>
            </div>
          </div>

          <div className="service__programming">
            <h3>Front End/Mobile Dev Service</h3>
            <div className="service__content">
              <article className='service__detail'>
              <div>
                  <h4>Development of application UI design and UX research.</h4>
                </div>
                <br />
                <div>
                  <h4>Front End Website design development using framework.</h4>
                </div>
                <br />
                <div>
                  <h4>Android-based mobile application development.</h4>
                </div>
                <br />
                <div>
                  <h4>Game design development</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Service