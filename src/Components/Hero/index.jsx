import SymbolCode from '../CodeRow'
import { symbolA, symbolB, symbolC, symbolD, symbolE, symbolF, symbolG, symbolH, symbolI } from './symbolCodeStyles'

import './hero.css'

const Hero = _ => {
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
