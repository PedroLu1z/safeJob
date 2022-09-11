import React from 'react';
import { Link } from 'react-router-dom'
import './erro.css'

function Erro(){
    return(
        <div className='container-error'>
            <h1>Ops página não encontrada!</h1>
            <span>Encontramos apenas essas Páginas:</span> <br />
            <Link to='/'>Home</Link>
            <br />
            <Link to='/cadastro'>Sou Candidato</Link>
            <br />
            <Link to='/cadastroempresa'>Sou Empresa</Link>
            <br />
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Erro;