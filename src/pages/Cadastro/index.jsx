import React from 'react';
import './style.css'
function Cadastro(){
    return(
        <div className='container'>
            <h1>Cadastro do Usuário</h1>

            <form>
                <label htmlFor="">Nome:</label>
                <input type="text" name='nome'/> <br />
                <label htmlFor="">Email:</label>
                <input type="email" name='email' /> <br />
                <label htmlFor="">Senha</label>
                <input type="password" name='senha' /> <br />
                <label htmlFor="">Cidade</label>
                <input type="text" name='cidade' />
            </form>
        </div>
    )
}

export default Cadastro;