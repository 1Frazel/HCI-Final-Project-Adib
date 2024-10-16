import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Certificates from './components/certificates/Certificates'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Project from './components/project/Project'
import Creation from './components/creation/Creation'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Certificates/>
        <Service />
        <Portfolio />
        <Project />
        <Creation/>
        <Contact />
        <Footer />
    </>
  )
}
    
export default App