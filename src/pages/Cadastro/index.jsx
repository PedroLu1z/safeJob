import React from 'react';
import './style.css'
import imgCadastro from '../img/img_cadastro.png'
import { User, Mail, Key, Globe, Printer, Folder, Calendar } from 'react-feather'
function Cadastro(){
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
                        <label htmlFor="">Nome</label>
                        <input className='input_igual' type="text" name='nome' placeholder='Nome'/>
                    </div>
                </div>
                <div className='container_fases'>
                    <Mail size={25}/>
                    <div>
                        <label htmlFor="">Email</label>
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
                    <Globe/>
                    <div>
                        <label htmlFor="">Cidade</label>
                        <input className='input_igual' type="text" name='cidade' placeholder='Cidade' />
                    </div>
                </div>
                <div className='container_fases'>
                    <Printer/>
                    <div>
                        <label htmlFor="">CPF</label>
                        <input className='input_igual' type="text" name='cpf' placeholder='CPF' />
                    </div>
                </div>
                <div className='container_fases'>
                    <Folder/>
                    <div>
                        <label htmlFor="">RG</label> 
                        <input className='input_igual' type="text" name='rg' placeholder='RG'/>
                    </div>
                </div>
                <div className='container_fases'>
                    <Calendar/>
                    <div>
                        <label htmlFor="">Data de Nascimento</label>
                        <input className='input_date' type='date' name='data'/>
                    </div>
                </div>
                {/*<div className='check'>
                    <input type="checkbox" name="" id="" />
                    <label id='relembrar' htmlFor="">Relembrar Senha</label>
                </div>*/}
                <button className='registrar'>Registrar-se</button>
                <p>Já se registrou?<a href="#">Logar</a></p>
            </form>
        </div>
    )
}

export default Cadastro;