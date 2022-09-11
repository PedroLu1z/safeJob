import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
              <div className='content'>
                <div className='texto-titulo'>
                  <h1>Safe<span>JOB</span></h1>
                </div>
                
                 <p className='texto-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum fugit deleniti, magni quidem error quisquam iste reprehenderit ipsum perspiciatis! Consequuntur impedit unde dolor dolores aliquid, ex nam earum ipsum?
                 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum odio similique accusamus nam, alias recusandae blanditiis maxime, eum, nihil quos. Aut repellat atque fuga aliquid nisi corrupti velit omnis?</p>
                <div>
                  {/* <a className='btn'>Conhecer Mais</a> */}
                  <Link to='/cadastro'>Faça Parte da Familia SafeJob</Link>
                </div>
              </div>
        </div>
    )
}

export default Home;