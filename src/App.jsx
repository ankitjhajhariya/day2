import { useState } from 'react'
import Button from './button'
import './App.css'
import Nav from './Nav'
import Hero from './hero'
import Aboutus from './aboutus'

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
