import { useState } from 'react'
import Button from './compnent/button'
import './App.css'
import Nav from './compnent/Nav'
import Hero from './compnent/hero'
import Aboutus from './compnent/aboutus'
import '@fontsource/poppins'; 


function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <section className='hero'>
        <Hero></Hero>
      </section>
      <section className='aboutussection'>
        <Aboutus/>
      </section>
    </>
  )
}

export default App
