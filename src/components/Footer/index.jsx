import React from 'react';
import './footer.css'
function Footer(){
    return(
        <footer>
            <div className="main-content">
                 <div className="left box">
                    <h2>Sobre nós</h2>
                    <div className="content-footer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id.</p>
                    
                     <div className="social">
                        <a href="#"><span className='fab fa-facebook-f'></span></a>
                        <a href="#"><span className='fab fa-twitter'></span></a>
                        <a href="#"><span className='fab fa-instagram'></span></a>
                        <a href="#"><span className='fab fa-linkedin'></span></a>
                     </div>
                    </div>
                 </div>
                 <div className="center box">
                    <h2>Endereço</h2>
                    <div className="content-footer">
                        <div className="place">
                            <span className='fas fa-map-marker'></span>
                            <span className='text'>Av. Paulista 1106, São Paulo, SP</span>
                        </div>

                        <div className="phone">
                            <span className='fas fa-phone-alt'></span>
                            <span className='text'>(xx) xxxxx-xxxx</span>
                        </div>

                        <div className="email">
                            <span className='fas fa-envelope'></span>
                            <span className='text'>smashcode@gmail.com</span>
                        </div>
                    </div>
                 </div>
                 <div className="right box">
                        <h2>Contato</h2>
                        <div className="content-footer">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input type="email" required/>
                                </div>

                                <div className="msg">
                                    <div className="tex">Mensagem *</div>
                                    <textarea cols="25" rows="2" required></textarea>
                                </div>
                                <div className="btn">
                                    <button type='submit'>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
            <div className="bottom">
                <div className="center">
                    <span className='credit'>Criado por <a href="#">SJ</a></span>
                    <span className='far fa-copyright'>2022 Todos os direitos reservados</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
