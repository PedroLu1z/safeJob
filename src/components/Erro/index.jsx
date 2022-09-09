import React from 'react';
import { Link } from 'react-router-dom'

function Erro(){
    return(
        <div>
            <h1>Ops página não encontrada!</h1>
            <span>Encontramos apenas essas Páginas:</span> <br />
            <Link to='/'>Home</Link>
            <br />
            <Link to='/cadastro'>Cadastro-Usuario</Link>
            <br />
            <Link to='/cadastroempresa'>Cadastro-Empresa</Link>
            <br />
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Erro;