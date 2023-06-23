import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiUser, BiPhoneCall } from 'react-icons/bi';
import { BsBookmarkStar } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 500) {
        setActiveNav('#');
      } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        setActiveNav('#about');
      } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
        setActiveNav('#experience');
      } else if (scrollPosition >= 1500 && scrollPosition < 2000) {
        setActiveNav('#service');
      } else if (scrollPosition >= 2000 && scrollPosition < 2500) {
        setActiveNav('#portfolio');
      } else {
        setActiveNav('#contact');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <AiOutlineUnorderedList />
      </a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}>
        <GoGear />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BsBookmarkStar />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiPhoneCall />
      </a>
    </nav>
  );
}

export default Nav;
