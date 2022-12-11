import { Link } from 'gatsby'
import React from 'react'
import './Footer.scss'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='top'>
                <span>©2020 Yourcompany</span>
                <h1>Landie</h1>
                <Button
                    text='Purchase now'
                    address='/development'
                    padding={{top: '.4', right: '1.7', bottom: '.4', left: '1.6'}}
                    subClass='medium12'
                />

            </div>
            <div className='bottom'>
                <Nav />
                <div className='social'>
                    <Link to='/development' className='link'>
                        <img src="/fb.svg" alt="fb icon" />
                    </Link>
                    <Link to='/development' className='link'>
                        <img src="/linkedin.svg" alt="linkedin icon" />
                    </Link>
                    <Link to='/development' className='link'>
                        <img src="/twitter.svg" alt="twitter icon" />
                    </Link>
                    <Link to='/development' className='link'>
                        <img src="/yt.svg" alt="yt icon" />
                    </Link>
                    <Link to='/development' className='link'>
                        <img src="/inst.svg" alt="inst icon" />
                    </Link>
                </div>
            </div>
        </div>
        
    </footer>
  )
}
