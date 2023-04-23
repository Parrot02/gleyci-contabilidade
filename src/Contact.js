import * as React from 'react'
import { useState, useContext } from 'react'

function Contact(value){

    const options = ['Abertura de MEI', 'Abertura de microempresa', 'Investimentos']
    const items = options.map((options, index) =>
    <option value={index}>{options}</option>
)
    const [choice, setChoice] = useState(1) // items[value.value].props.value

    return(
        <div className='divisor' id='contato'>
        <h1>Entre em contato conosco</h1>
          <div className="input__container">
              <label className="input__label">Nome</label>
              <input placeholder="Digite seu nome completo." className="input" name="text" type="text" required/>
              <label className="input__label">Telefone</label>
              <input placeholder="Ex: (21)9977-8844" className="input" name="text" type="phone"/>
              <label className="input__label">Email</label>
              <input placeholder="Ex: joao@silva.com.br" className="input" name="text" type="email"/>
              <label className="input__label">Serviço pretendido</label>
              <select name='servicos' id='servicos' defaultValue={choice} onChange={(e) => setChoice(e.target.value)}>
                {items}
              </select>
              <button id='bottone5'>ENVIAR</button>
          </div>
      </div>
    )
}

export default Contact; 