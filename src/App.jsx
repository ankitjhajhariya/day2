import { useState } from 'react'
import Button from './compnent/button'
import './App.scss'
import Nav from './compnent/Nav'
import Hero from './compnent/hero'
import Aboutus from './compnent/aboutus'
import '@fontsource/poppins';
import Experience from './compnent/Experience'
import OurServices from './compnent/OurServices'


function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <section className='hero'>
        <Hero />
      </section>
      <section className='aboutussection'>
        <Aboutus />
      </section>
      <section className='experiencesection'>
        <Experience />
      </section>
      <section className='experiencesectionSection'>
        <OurServices />
      </section>
      
    </>
  )
}

export default App;
