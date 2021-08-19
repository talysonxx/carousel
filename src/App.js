import React, {useEffect, useState, useRef} from 'react'
import './App.css'
import logoImg from './static/img/logo.png'
import tos from './static/tos.json'


export default function App() {
  // const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    document.title = 'React - Carousel'

    // fetch('http://localhost:3000/static/tos.json')
    // // .then(console.log)
    // .then(response => response.json())
    // .then(setData)
    // .catch(error => console.log('erro:', error))
  })

  const handleLeftClick =  (event) => {
    event.preventDefault()

    console.log(carousel.current.offsetWidth)

    carousel.current.scrollLeft -= carousel.current.offsetWidth / 3
  }
  const handleRightClick = (event) => {
    event.preventDefault()

    console.log(carousel.current.offsetWidth)

    carousel.current.scrollLeft += carousel.current.offsetWidth / 3
  }

  // if(!data || !data.length) return null

  // pergunta: tem item lá?
  if(!tos){
    alert('Arquivos faltando! Não foi possível renderizar a página!')
    return null
  }

  return (
    <div className='container'>
      <div>
        <img className='logo' src={logoImg} alt='The Otaku Store Logo'/>
      </div>

      <div className='carousel' ref={carousel}>
      {tos.map(({id, name, oldPrice, currentPrice, link}) => {
        return(
        <div className='item' key={id}>
          <img className='itemImage' src={link}/>
          <div className='itemInfo'>
            <span className='itemName'>{name}</span>
            <span className='itemOldPrice'>R$ {oldPrice}</span>
            <span className='itemCurrentPrice'>R$ {currentPrice}</span>
          </div>
        </div>
        )
      })}
      </div>
      <div className='buttons'>
        <button onClick={handleLeftClick}><i className="fas fa-arrow-left"></i></button>
        <button onClick={handleRightClick}><i className="fas fa-arrow-right"></i></button>
      </div>
      {/* font awasome */}
      {/* <i class="fas fa-arrow-right"></i>
      <i class="fas fa-arrow-left"></i> */}
    </div>
  )
}
