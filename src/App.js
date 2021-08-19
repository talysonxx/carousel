import React, {useEffect} from 'react'
import './App.css'
import logoImg from './img/logo.png'
import camisaUm from './img/camisa-1.jpg'


export default function App() {
  useEffect(() => {
    document.title = 'React - Carousel'
  })

  return (
    <div className='container'>
      <div>
        <img className='logo' src={logoImg} alt='The Otaku Store Logo'/>
      </div>
      <div className='carousel'>
        <div className='item'>
          <img className='itemImage' src={camisaUm}/>
          <div className='itemInfo'>
            <span className='itemName'>Nome do item</span>
            <span className='itemOldPrice'>R$ 200,20</span>
            <span className='itemCurrentPrice'>R$ 198,40</span>
          </div>
        </div>
      </div>
        {/* font awasome */}
        {/* <i class="fas fa-arrow-right"></i>
        <i class="fas fa-arrow-left"></i> */}
    </div>
  )
}
