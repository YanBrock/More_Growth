import React from 'react'
import './Offer.scss'
import Button from '../Button/Button'

export default function Offer() {
  return (
    <article className='offer'>
        <div className='container'>
            <section className='block-one'>
                <h2 className='title'>A Price To Suit Everyone</h2>
                <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
            </section>

            <section className='block-two'>
                <span className='price'>$40</span>
                <span className='price-description'>UI Design Kit</span>
            </section>
            
            <section className='block-three'>
                <p className='profit'>See, One price. Simple.</p>
                <Button
                    text='Purchase Now'
                    address='/development'
                    padding={{top: '.354', right: '4.929', bottom: '.427', left: '4.871'}}
                    subClass='medium14'
                />
            </section>
        </div>
    </article>
  )
}
