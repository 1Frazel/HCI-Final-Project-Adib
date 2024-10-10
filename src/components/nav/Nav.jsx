import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiUser, BiPhoneCall } from 'react-icons/bi';
import { BsBookmarkStar } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';
import { TbCertificate } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  const [sectionPositions, setSectionPositions] = useState({});

  useEffect(() => {
    function updateSectionPositions() {
      // Query the sections, check if they exist before accessing offsetTop
      const home = document.querySelector('#home');
      const about = document.querySelector('#about');
      const experience = document.querySelector('#experience');
      const certificates = document.querySelector('#certificates');
      const service = document.querySelector('#service');
      const portfolio = document.querySelector('#portfolio');
      const project = document.querySelector('#project');
      const creation = document.querySelector('#creation');
      const contact = document.querySelector('#contact');

      setSectionPositions({
        home: home ? home.offsetTop : 0,
        about: about ? about.offsetTop : 0,
        experience: experience ? experience.offsetTop : 0,
        certificates: certificates ? certificates.offsetTop : 0,
        service: service ? service.offsetTop : 0,
        portfolio: portfolio ? portfolio.offsetTop : 0,
        project: project ? project.offsetTop : 0,
        creation: creation ? creation.offsetTop : 0,
        contact: contact ? contact.offsetTop : 0,
      });
    }

    function handleScroll() {
      const scrollPosition = window.scrollY;

      // Check and update based on scroll position
      if (scrollPosition < sectionPositions.about - 100) {
        setActiveNav('#');
      } else if (scrollPosition >= sectionPositions.about - 100 && scrollPosition < sectionPositions.experience - 100) {
        setActiveNav('#about');
      } else if (scrollPosition >= sectionPositions.experience - 100 && scrollPosition < sectionPositions.certificates - 100) {
        setActiveNav('#experience');
      } else if (scrollPosition >= sectionPositions.certificates - 100 && scrollPosition < sectionPositions.service - 100) {
        setActiveNav('#certificates');
      } else if (scrollPosition >= sectionPositions.service - 100 && scrollPosition < sectionPositions.portfolio - 100) {
        setActiveNav('#service');
      } else if (scrollPosition >= sectionPositions.portfolio - 100 && scrollPosition < sectionPositions.project - 100) {
        setActiveNav('#portfolio');
      } else if (scrollPosition >= sectionPositions.project - 100 && scrollPosition < sectionPositions.creation - 100) {
        setActiveNav('#project');
      } else if (scrollPosition >= sectionPositions.creation - 100 && scrollPosition < sectionPositions.contact - 100) {
        setActiveNav('#creation');
      } else {
        setActiveNav('#contact');
      }
    }

    // Update positions once the DOM is fully loaded
    updateSectionPositions();

    // Listen for scroll and resize events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateSectionPositions); // In case the window is resized

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionPositions);
    };
  }, [sectionPositions]); // Add sectionPositions as a dependency

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineUnorderedList />
      </a>
      <a href="#certificates" onClick={() => setActiveNav('#certificates')} className={activeNav === '#certificates' ? 'active' : ''}>
        <TbCertificate />
      </a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}>
        <GoGear />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <BsBookmarkStar />
      </a>
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>
        <FaRegFolder />
      </a>
      <a href="#creation" onClick={() => setActiveNav('#creation')} className={activeNav === '#creation' ? 'active' : ''}>
        <BsPencilSquare />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiPhoneCall />
      </a>
    </nav>
  );
}

export default Nav;
