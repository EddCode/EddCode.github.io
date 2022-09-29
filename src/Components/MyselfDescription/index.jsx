import './myself.css'

const MySelfDescription = () => {
  return (
    <section className='section-full'>
      <h2 className='title'>
        Me, Myself and I
      </h2>

      <div className='description-container'>
        <div className='description-text'>
          <p className='description'>
            I've been working since 2018 as web developer. I've collaborated with talented people to create web products for both business and consumer use.
            I`v designed app arquitectures and databases squema while keeping the deployment of optimal features at the center of what i do.
          </p>
          <p className='description'>
            I am passionate about creating solutions that helps automate and/or facilitate tasks.
            I'm excited to face new challenges, even with tools that I am not familiar with so that I can expand my stack of tools
            fot future challenges in order to decide what would be the best technology to solve any given, specific problem
            Actually I work at <a href='https://www.linkedin.com/company/altimetrik-méxico' target='_new'>Altimetrik Mexico</a> as a Software Engineer.
          </p>
          <p className='description'>
            Visit my <a href='https://www.linkedin.com/in/edgar-figueroa-gtz' target='_new'>LinkdIn</a> profile for more details
          </p>
        </div>

        <div className='tools'>
          <div className='description-card .frontend'>
            <h4>Frontend</h4>
            <ul>
              <li className='js'>JS</li>
              <li className='reactjs'>Reactjs</li>
              <li className='css'>Css</li>
              <li className='styled-components'>Styled components</li>
            </ul>
          </div>
          <div className='description-card .backend'>
            <h4>Backend</h4>
            <ul>
              <li className='nodejs'>Nodejs</li>
              <li className='express'>Express</li>
              <li className='typescript'>Typescript</li>
              <li className='fastify'>Fastify</li>
            </ul>
          </div>
          <div className='description-card .others'>
            <h4>Others</h4>
            <ul>
              <li className='mysql'>Mysql</li>
              <li className='jest'>Unit testing (Jest) TDD</li>
              <li className='git'>Git</li>
              <li className='docker'>Docker</li>
              <li className='postgres'>Postgres</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySelfDescription
