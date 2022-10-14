import React from 'react';
import imgCadastro from '../img/img_cadastro.png'
import { User, Mail, Key, Globe, Printer, Folder, Calendar } from 'react-feather'
import './style_login.css'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div className="container_cadastro">
        <picture>
                <img className='img_cadastro_container' src={imgCadastro} alt='' />
        </picture>
        <form action="POST" className="container_form">
        <div className='bem_vindo'>
                    <h1>Bem-vindo a</h1>
                    <h1 className='safejob'>SafeJob</h1>
                </div>
                <hr/>          
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
                <div className='check'>                   
                    <input type="checkbox" />
                    <label id='relembrar' htmlFor="">Relembre o login</label>
                    <a className='esqueci' href="#">Esqueci a senha</a>
                </div>
                <div>
                   
                </div>
                <button className='registrar'>Logar</button>
                
        </form>
    </div>
  );
}   