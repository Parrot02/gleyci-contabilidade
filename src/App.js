import * as React from 'react';
import { useState, useContext, createContext } from 'react'
import './App.css'
import './Button_specialized.css'
import './Zap.css'
import './Contact.css'
import logo from './gs-clean.png';
import bg from './img1.jpg'
import cont from './img4.png'
import zap from './WhatsApp.svg.webp'
import calc from './calculadora.png'
import empresas from './legalizacao-empresas.png'
import receita from './receita-logo.png'
import invest from './pexels-david-mcbee-730547.jpg'
import facebook from './145802.png'
import NavBar from './Nav'
import SmallBusiness from './Smallbusiness'
import Contact from './Contact'
import insta from './Instagram-Icon.png'

const ItemContext = createContext(1)

function App() {

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [selected, setSelected] = useState(1)

  const handleNav = (content) => {
    document.getElementById(content)
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="presentation">
      <div className='foto'>
        <img src={cont} />
      </div>
        <div className="headers" >
            <p className="pontinho-forte shadow-black">Gleyci Silveira</p>
            <p className='pontinho shadow-white'>Contadora</p>
            <br/>
            <br/>
            <a href='#contato'><button className='ingressar' onClick={() => setSelected(2)}>
              <span>ABRA SUA EMPRESA</span></button></a>
            <span className='clean'></span>
          </div>
      </div>
      <div class="custom-shape-divider-bottom-1678754153">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
      </div>
      <div className='divisor' id='first'>
        <p className='pontinho-forte' style={{color:'black',textAlign:'center'}}>Como podemos ajudar você hoje?</p>
          <div className='servicos' id='servicos'>
              <div className='column'>
                  <div className='item'>
                    <span>Declaração de I.R</span>
                    <img src={receita} />
                  </div>
                  <div className='item'>
                    <span>Legalização de empresas</span>
                    <img src={empresas} />
                  </div>
                  <div className='item'>
                    <span>Planejamento tributário</span>
                    <img src={calc} />
                  </div>
              </div>
          </div>
      </div>
      <br/>
      <SmallBusiness/>
      <Contact value={selected} />
      <div className='divisor' id='social-painel'>
          <p className='pontinho-forte' style={{color:'white'}}>Acompanhe nossas redes sociais</p>
          <p className='pontinho' style={{color:'white'}}>Assine nossas redes sociais para ficar por dentro de qualquer novidade.</p>
          <div id='social' className='social-icons'>
              <img src={facebook} />
              <img src={insta} />
          </div>
      </div>

      <div className='footer-wrapper'>
        <div className='footer'>
            <ul>
              <p className='pontinho-forte' style={{fontSize: '20px'}}>NAVEGAÇÃO</p>
              <li>INÍCIO</li>
              <li>CONTATO</li>
            </ul>
          <ul>
            <p className='pontinho-forte' style={{fontSize: '20px'}}>SOLUÇÕES</p>
            <li>ABERTURA DE EMPRESAS</li>
            <li>DECLARAÇÃO DE IR</li>
          </ul>
          <ul>
            <p className='pontinho-forte' style={{fontSize: '20px'}}>ESPECIALIDADES</p>
            <li>MODALIDADE MEI</li>
            <li>INVESTIMENTOS</li>
          </ul>
          <ul>
            <p className='pontinho-forte' style={{fontSize: '20px'}}>CONTATO</p>
            <p className='pontinho quebra contato' style={{color: '#FFFFFF'}}>(21)9xxx-xxxx</p>
            <p className='pontinho quebra contato' style={{color: '#FFFFFF'}}>email@email.com</p>
          </ul>
        </div>
        <div className='footer-divisor'></div>
            <div className='footer-footer'>
              <img src={logo} />
              <div className='copy'>
              <p className='pontinho'>Gleicy Contabilidade Ltda. Desenvolvido por - <a href='https://fatinfo.com.br/'>FAT Informática®</a> - 2023</p>
            </div>
          </div>
        <div className='zap'>
            <a href='https://wa.me/+5521964796603' target={'_blank'}><img src={zap} /></a>
        </div>
    </div>
    </div>
  );
}

export default App;
