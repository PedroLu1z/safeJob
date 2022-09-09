import React from 'react'

function CadastroEmpresa(){
    return(
        <div className='container'>
            <h1>Cadastro da Empresa</h1>

            <form>
                <label htmlFor="">Nome da Empresa:</label>
                <input type="text" name='empresa' /> <br />
                <label htmlFor="">CNPJ: </label>
                <input type="number" name='cnpj' /> <br />
                <label htmlFor="">Endereço:</label>
                <input type="text" name='endereco' /> <br />
                <label htmlFor="">Email-Empresarial: </label>
                <input type="email" name='email' /> <br />
                <label htmlFor="">Senha: </label>
                <input type="password" name='senha' />

            </form>
        </div>
    )
}

export default CadastroEmpresa;