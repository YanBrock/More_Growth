import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Nav />

        <h1>Landie</h1>

        <Button 
          text='Buy Now' 
          address='/development' 
          padding={{top: '.4', right: '5.629', bottom: '.4', left: '5.571'}} 
          subClass='medium12'
        />
      </div>
    </header>
  )
}
