import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Erro from './components/Erro';
import Navbar from './components/Navbar'
import Cadastro from './pages/Cadastro';
import CadastroEmpresa from './pages/CadastroEmpresa';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Footer from './components/Footer'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='/cadastro' element= { <Cadastro/> }/>
                    <Route path='/cadastroempresa' element={ <CadastroEmpresa/> } />
                    <Route path='/sobre' element={ <Sobre/> } />


                    <Route path='*' element={ <Erro/> } />
                </Routes>
            <Footer/>
        </BrowserRouter>        
    )
}

export default RoutesApp;