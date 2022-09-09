import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar(){
    return(
        <header>
            <h1>Smash Code</h1>
            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/cadastro'>Cadastro-Usuário</Link>
                <Link to='/cadastroempresa'>Cadastro-Empresa</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        </header>
    )
}

export default Navbar