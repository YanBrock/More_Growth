import { Link } from 'gatsby'
import React from 'react'
import './Button.scss'

export default function Button({text, address, padding, subClass, id}) {
  return (
    <button className={subClass} id={id}>
        <Link 
            className='link'
            to={`${address}`}
            style={
                {
                    padding: `${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`,
                }
            }
            id={id}
        >
            {text}
        </Link>
    </button>
  )
}
