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
    info: 'My first project was a firewall replacement, where my senior and I went to PT Mega Eltra Pupuk Indonesia in the Jatiwaringin area, East Jakarta, for installation and replacement of devices. The device to be replaced is the Palo Alto 3200 series firewall. My job during the project was to configure the Mikrotik device to be integrated with the Palo Alto firewall device that we had just installed. The configuration I did was integration of IP Addresses, then mapping VLANs so that Palo Alto could be integrated on all switches throughout the floor and stabilizing the VPN line.'  },
  {
    image: IMG2,
    title: 'Access Point Installation and Fiber Optic Survey PT. ASDP Merak',
    info: 'My second project is in the Merak Port area in Cilegon. This time I was going to install the Ruckus Wireless Zoneflex R320 on a ferry traveling to Lampung at the Merak Exclusive Pier. So my boss and I went up to the ferry while installing network devices, after finishing in the afternoon because we had to follow the Merak-Lampung round trip, that night we went to the PT ASDP Indonesia Ferry office to do topology mapping and Fiber Optic surveys by remote until late at night, and continued to stay at the hotel. Then the next morning, we continued the Fiber Optic survey by going directly to the field, until the afternoon. After completion, we returned to Jakarta.'  },
  {
    image: IMG3,
    title: 'Installation Upgrade Switch Ruckus PT. ASDP Bitung',
    info: 'My third project was done by remote, I was given directions by my boss to upgrade the Ruckus ICX Series devices that would be sent to Bitung, the configuration I did was to upgrade the firmware, and configure the VLAN according to the directions given, I did this configuration on the same 8 devices, after completing the configuration the devices were wrapped again before being sent to their destination.'  },
  {
    image: IMG4,
    title: 'Installation Upgrade Switch Ruckus and MikroTik CCR PT. Rajawali Nusindo',
    info: 'My fourth project was done by remote, I was assigned by my boss to upgrade the Ruckus ICX Series and Mikrotik CCR devices, the configuration I did was only upgrading the firmware, and configuring the VLAN according to the directions given, I did this configuration on the same 6 devices. after completing the configuration, the device was wrapped again before being sent to its destination.'  },
  {
    image: IMG5,
    title: 'Installation Upgrade Switch and Access Point Ruckus DPR RI',
    info: 'My fifth project was divided into 2 stages. First, my supervisor and I upgraded and configured VLANs on Ruckus ICX series devices before sending them to DPR RI for installation. Secondly, after completing the upgrade, we then carried out the installation by going directly to DPR RI. After a briefing with DPR IT, we replaced Juniper devices with Ruckus ICX devices in several data boxes scattered in the DPR building, and after that, we also installed Ruckus Wireless Zoneflex in various departments in the DPR building.'  },
  {
    image: IMG6,
    title: 'Preventive Maintenance Switch Ruckus and Avaya Kemenhub RI',
    info: 'The sixth project I only did maintenance on network devices at the Indonesian Ministry of Transportation, there I checked the condition of the devices at the Ministry, there were Ruckus switches and Avaya switches, I checked the physical condition of the router, such as temperature, LED lights. Then check the configuration if there is anything changed or missing, then make sure the device remains integrated, and then testing on end-users to ensure there are no problems.'  },
  {
    image: IMG7,
    title: 'SD-WAN Alfamart',
    info: 'SD-WAN Alfa is a megaproject that was being worked on by the MTM company when I interned there, because in this project, MTM collaborated with ICON + in terms of MPLS infrastructure. And in this megaproject, we installed 3000+ Alfamart stores and hundreds of Alfamidi stores throughout Indonesia. During the project, I worked on 3 things: Pre-Config: Perform fresh configuration on Fortigate products in accordance with the provisions, such as MPLS configuration, GSM, etc. Before finally the device is sent to Alfa stores throughout Indonesia Remote Installation: After the device finally arrives, we will do a remote installation with the ICON + Onsite Team, so that the Fortigate device can be connected to the Alfa Server, and SD-WAN can run smoothly Optimization: Optimization is only done if there are problems with SD-WAN, so that SD-WAN can run smoothly again. '  },
  {
    image: IMG8,
    title: 'Implementasi Security Branch BRI',
    info: <p> This project is an implementation in improving network security at BRI offices.
          <br />
          BRI itself has 3 types of offices, there are KCP (Branch Office) at the lowest level, then there is KC (Branch Office) at the middle level, and there is KK (Regional Office) which is the center of the BRI network in the area. And in this project, my team and I were assigned to install Fortigate in several KCP and KC offices spread across Jabodetabek and Banten, and while I got an allotment to install in 9 KCP, and 1 KC.
          <br />
          <br />
          In this project, I did 3 things during the installation:  
          <br />
          1. When I first arrived at the site, what I did was survey the topology of the BRI office. There are 2 types of BRI networks, Intranet and Internet, and we must know in detail the topology of the two networks. 
          <br />
          2. Start Intranet / Internet Installation After completing the survey and analyzing the topology, then we start to start adding Fortigate devices to the network, which will later become the office's Intranet and Internet network firewall. 
          <br />
          3. Documentation after completing the installation, I check all BRI facilities, systems, and applications, as well as the internet there, whether they can be used again and the traffic has passed through Fortigate, if so then the implementation has been successful.'</p> 
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