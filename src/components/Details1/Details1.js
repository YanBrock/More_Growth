import React from 'react'
import './Details1.scss'

export default function Details1() {
  return (
    <article className='details1'>

        <div className='container'>
            <section className='text'>
                <h2 className='title'>Light, Fast & Powerful</h2>
                <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <span className='space'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span>
                </p>

                <div className='text-wrapper'>
                    <div className='item'>
                        <img src="/icon.svg" alt="icon" />
                        <h3>Title Goes Here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div className='item'>
                        <img src="/icon.svg" alt="icon" />
                        <h3>Title Goes Here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>
            </section>

            <section className='image'>
                <img src="/undraw_mobile_login_ikmv.svg" alt="women with huge smartphone" />
            </section>
        </div>

    </article>
  )
}
