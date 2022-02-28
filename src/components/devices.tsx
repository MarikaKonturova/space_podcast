import React from 'react'
import phone from '../assets/img/phone.svg'
import desktop from '../assets/img/desktop.svg'

export const Devices = () => {
  return (
    <section className="devices">
        <div className="wrapper devices_wrapper">
        <div className="devices_main">
            <h2>Listen on desktop or mobile</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring
            </p>
        </div>
        <img src={phone} alt="phone" className="devices_phone"/>
        <img src={desktop} alt="desktop" className="devices_desktop"/>
        </div>
    </section>
  )
}
