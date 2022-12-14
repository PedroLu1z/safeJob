import React from 'react'
import imgCadastro from '../img/img_cadastro.png'
import { User, Mail, Key, Globe, Printer, Folder, Calendar } from 'react-feather'

function CadastroEmpresa(){
    return(
        <div className='container_cadastro'>

            <picture>
                <img className='img_cadastro_container' src={imgCadastro} alt='' />
            </picture> 

            <form method='POST' className='container_form'> 
                <div className='bem_vindo'>
                    <h1>Bem-vindo a</h1>
                    <h1 className='safejob'>SafeJob</h1>
                </div>
                <hr/>          
                <div className='container_fases'>
                    <User size={25} className='icon'/>         
                    <div>
                        <label htmlFor="">Nome da Empresa</label>
                        <input className='input_igual' type="text" name='nome' placeholder='Nome'/>
                    </div>
                </div>
                <div className='container_fases'>
                    <Mail size={25}/>
                    <div>
                        <label htmlFor="">Email Empresarial</label>
                        <input className='input_igual' type="email" name='email' placeholder='Email' />
                    </div>
                </div>
                <div className='container_fases'>
                    <Key/>
                    <div>
                        <label htmlFor="">Senha</label>
                        <input className='input_igual' type="password" name='senha' placeholder='Senha' />
                    </div>
                </div>
                <div className='container_fases'>
                    <Printer/>
                    <div>
                        <label htmlFor="">CNPJ</label>
                        <input className='input_igual' type="text" name='cidade' placeholder='CNPJ' />
                    </div>
                </div>
                <div className='container_fases'>
                    <Globe/>
                    <div>
                        <label htmlFor="">Endere??o</label>
                        <input className='input_igual' type="text" name='cpf' placeholder='Endere??o' />
                    </div>
                </div>
                <button className='registrar'>Registrar-se</button>
                <p>J?? se registrou?<a href="#">Logar</a></p>
            </form>
        </div>
    )
}

export default CadastroEmpresa;