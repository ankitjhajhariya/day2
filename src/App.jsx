import { useState } from 'react'
import Button from './component/button'
import './App.scss'
import Nav from './component/Nav'
import Hero from './component/hero'
import Aboutus from './component/aboutus'
import '@fontsource/poppins';
import Experience from './component/Experience'
import OurServices from './component/OurServices'
import ChoWorMiss from './component/ChoWorMiss'





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
      <section className='worksectionSection'>
        <ChoWorMiss />
      </section>

    </>
  )
}

export default App;
