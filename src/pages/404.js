import React from 'react'
import Button from '../components/Button/Button'
import '../notFound.scss'

export default function NotFound() {
  return (
    <article className='not-found'>
      <section>
        <h1>Error: 404</h1>
        <p>Sorry, this page isn't exist.</p>
        <Button
          text='Go Home'
          address='/'
          padding={{top: '.354', right: '4.929', bottom: '.427', left: '4.871'}}
          subClass='medium12'
        />
      </section>
      
      
    </article>
  )
}
