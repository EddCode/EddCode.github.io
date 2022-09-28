import SymbolCode from '../CodeRow'

import './hero.css'

const Hero = _ => {
  const symbolA = {
    1: ['symbol-5', 'symbol-orange'],
    2: ['symbol-3'],
    3: ['symbol-disc']
  }

  const symbolB = {
    1: ['symbol-8', 'symbol-purple']
  }

  const symbolC = {
    1: ['symbol-3', 'symbol-blue'],
    2: [],
    3: ['symbol-2'],
    4: ['symbol-5', 'symbol-blue']
  }

  const symbolD = {
    1: ['symbol-5', 'symbol-blue'],
    2: ['symbol-3'],
    3: ['symbol-disc'],
    4: ['symbol-8', 'symbol-purple']
  }

  const symbolE = {
    1: ['symbol-5', 'symbol-purple'],
    2: ['symbol-disc']
  }

  const symbolF = {
    2: ['symbol-4', 'symbol-blue'],
    3: ['symbol-2', 'symbol-blue'],
    4: ['symbol-9', 'symbol-blue']
  }

  const symbolG = {
    1: ['symbol-5', 'symbol-blue'],
    2: ['symbol-2', 'symbol-blue']
  }

  const symbolH = {
    4: ['symbol-9', 'symbol-orange']
  }

  const symbolI = {
    1: ['symbol-2', 'symbol-purple'],
    2: [],
    3: ['symbol-2'],
    4: ['symbol-4', 'symbol-blue']
  }

  return (
    <section id='section-hero' className='section-full section-hero'>
      <div>
        <div>
          <SymbolCode symbols={symbolA} />
          <SymbolCode symbols={symbolB} />
          <SymbolCode symbols={symbolC} />
          <SymbolCode symbols={symbolD} />
          <SymbolCode />
          <SymbolCode ident symbols={symbolD} />
        </div>
        <div className='text-zone'>
          <h1 className='hero-title'>
            Hi, <br />
            I'm Edgar, <br />
            web developer
          </h1>
          <p className='hero-text-span'>
            Fullstack developer (Javascript)
          </p>
        </div>
        <SymbolCode symbols={symbolE} />
        <SymbolCode symbols={symbolF} />
        <SymbolCode />
        <SymbolCode symbols={symbolG} />
        <SymbolCode ident symbols={symbolH} />
        <SymbolCode symbols={symbolI} />
        <SymbolCode />
      </div>
      <canvas id='canvas' className='hero-canvas' width='1440' height='764' />
    </section>
  )
}

export default Hero
