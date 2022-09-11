import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar(){
    return(
        <header>
            <h1>SafeJob</h1>
            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/cadastro'>Sou Candidato</Link>
                <Link to='/cadastroempresa'>Sou Empresa</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        </header>
    )
}

export default Navbar