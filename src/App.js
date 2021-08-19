import React, {useEffect, useState} from 'react'
import './App.css'
import logoImg from './static/img/logo.png'
import camisaUm from './static/img/camisa-1.jpg'
import tos from './static/tos.json'


export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = 'React - Carousel'

    // fetch('http://localhost:3000/static/tos.json')
    // // .then(console.log)
    // .then(response => response.json())
    // .then(setData)
    // .catch(error => console.log('erro:', error))
  })

  // if(!data || !data.length) return null

  return (
    <div className='container'>
      <div>
        <img className='logo' src={logoImg} alt='The Otaku Store Logo'/>
      </div>
      <div className='carousel'>
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
        {/* font awasome */}
        {/* <i class="fas fa-arrow-right"></i>
        <i class="fas fa-arrow-left"></i> */}
    </div>
  )
}
