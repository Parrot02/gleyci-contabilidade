import './App.css'
import logo from './gs-clean.png'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavBar = (content) => {

    const handleClick = (e) => {
        document.getElementById(e.target.innerHTML.toLowerCase()).scrollIntoView({ behavior: 'smooth'})
    }

    return(
        <div className='nav'>
        <nav>
        <div className="hamb">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <img src={logo} />
          <ul>
            <li style={{borderBottom:'2px solid #783153'}}>Início</li> 
            <li><a href='#social'>Serviços</a></li>
            <li><a href='#contato'>Contato</a></li>
          </ul>
        </nav>
      </div>
    )
}

export default NavBar; 