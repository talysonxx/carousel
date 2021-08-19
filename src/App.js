import React, {useEffect} from 'react'


export default function App() {
  useEffect(() => {
    document.title = 'React - Carousel'
  })

  return (
    <>
      <span style={{fontSize: '2rem'}}>
        <i class="fas fa-arrow-right"></i>
        <i class="fas fa-arrow-left"></i>
      </span>
    </>
  )
}
