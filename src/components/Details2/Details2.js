import React from 'react'
import './Details2.scss'

export default function Details2() {
  return (
    <article className='details2'>

        <div className='container'>
            <section className='image'>
                <img src="/undraw_happy_news_hxmt.svg" alt="" />
            </section>
            
            
            <section className='text'>
                <h2 className='title'>Light, Fast & Powerful</h2>
                <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    <span className='subtitle-space'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span>
                </p>
            </section>
        </div>

    </article>
  )
}
