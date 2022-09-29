import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './menu.css'

const Menu = () => {
  return (
    <nav className='menu'>
      <div className='menu-container'>
        <figure className='logo'>
          <span>Web Developer</span>
        </figure>
        <div className='menu-list'>
          <a href=''>About</a>
          <a href=''>Work</a>
          <a href=''>Blog</a>
        </div>
        <ul className='social-networks'>
          <li>
            <a href='https://github.com/EddCode' target='_new'>
              <FontAwesomeIcon icon={faGithub} color='' className='social-icons' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/edgar-figueroa-gtz/' target='_new'>
              <FontAwesomeIcon icon={faLinkedinIn} color='#909096' className='social-icons' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
