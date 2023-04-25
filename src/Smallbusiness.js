import './App.css'
import small from './woman-g0fd67471e_1280.jpg'
import './Smallbusiness.css'
import receita from './receita-logo.png'

function SmallBusiness() {
    return(
        <div className='divisor' id='painel'>
        <p className='pontinho-forte' style={{color:'white'}}>Contabilidade especializada em MEI</p>
        <p className='pontinho' style={{color:'white'}}>Encontre todo o suporte necessário para seu pequeno negócio.</p>
        <img className='img-lateral' src={small}/>
    </div>
    )
}

export default SmallBusiness;