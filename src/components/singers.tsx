import React from 'react'
import photo from '../assets/img/photo.png'
export const Singers = () => {
  return (
    <section className="singers" id='singers'>
        <div className="singers_main">
            <h2>Listen from one of the best singers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
            <button className="button singers_button">Talk to us</button>
        </div>
        <div className="singers_img">
        <img src={photo} alt="" />
        </div>
    </section>
  )
}
