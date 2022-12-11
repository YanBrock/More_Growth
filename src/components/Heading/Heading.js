import React from 'react'
import './Heading.scss'
import Button from '../Button/Button'

export default function Heading() {
  return (
    <article className='heading'>
        <section className='main-content'>
            <h2 className='title'>Introduce Your Product Quickly & Effectively</h2>
            <p className='subtitle'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <span className='space'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span>
            </p>

            <div className='btn-wrapper'>
                <Button
                    text='Purchase UI Kit'
                    address='/development'
                    padding={{top: '.5', right: '3.9', bottom: '.5', left: '4'}}
                    subClass='purchase medium16'
                />

                <Button
                    text='Learn More'
                    address='/development'
                    padding={{top: '.7', right: '5.34', bottom: '.3', left: '5.373'}}
                    subClass='medium16'
                    id='learn'
                />
            </div>
        </section>
    </article>
  )
}
