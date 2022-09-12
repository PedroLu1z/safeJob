import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu } from 'react-feather'
import './style.scss'


function Navbar(){
    return(
        <header className='header-sj'>
            <nav>
                <h1>SafeJob</h1>
                <Menu class='hamburguer active'/>
                <ul className='menubar active'>
                    <form action="" method='GET'>
                        <input type="text" placeholder='Buscar vaga...' />
                        <Search id='search-icon'/>
                    </form>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <div id="hr-header"></div>
                    <div className="login">
                        <li id='btn-candidato'><Link to='/login-usuario'>Iniciar Sessão</Link></li>
                        <li id='btn-empresa'><Link to='/login-empresa'>Sou uma Empesa!</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar