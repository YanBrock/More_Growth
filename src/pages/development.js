import React from 'react'
import '../../src/development.scss'
import Button from '../components/Button/Button'
import Layout from '../components/Layout'

export default function development() {
  return (
    <Layout className="layout">
        <article className='development'>
            <div className='container'>
                <section className='text'>
                    <h1>Sorry...</h1>
                    <p>This page is under development</p>

                    <Button text='Go Home' address='/' padding={{top: '.354', right: '4.929', bottom: '.427', left: '4.871'}} subClass='medium16' />

                </section>

                <section className='image'>
                    <img className='development' src="/development.jpg"alt='developing process' />
                </section>
                
            </div>
        </article>
    </Layout>
  )
}
