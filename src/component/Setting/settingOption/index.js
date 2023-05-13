import React, { useEffect, useRef } from 'react'

function SettingOption() {



const settings = useRef();
useEffect(()=>{
    Array.from(settings.current.children).forEach(setting =>{
        setting.addEventListener('click', ()=>{
            Array.from(settings.current.children).forEach(e => {
                e.classList.remove('active');
            })
            setting.classList.add('active');
        })
    })
}, [])

  return (
    <div className='setting-option'>
        <ul ref={settings} className="setting-list">
            <li className="list-item ">
                <i className='bx bx-heart'></i>
                <h3>Appereance</h3>
                <p>Dark and Lignt mode. Font size</p>
            </li>
            <li className="list-item active">
                <i className='bx bx-store-alt'></i>
                <h3>Your Restaurant</h3>
                <p>Dark and Light mode, Font size</p>
            </li>
            <li className="list-item">
                <i className='bx bxs-discount' ></i>
                <h3>Products Management</h3>
                <p>Manage your product, pricing, etc</p>
            </li>
            <li className="list-item">
                <i className='bx bx-bell' ></i>
                <h3>Notifications</h3>
                <p>Customize your notifications</p>
            </li>
            <li className="list-item">
                <i className='bx bx-lock-open' ></i>
                <h3>Security</h3>
                <p>Configure Password, PIN, etc</p>
            </li>
            <li className="list-item">
                <i className='bx bx-alarm-exclamation' ></i>
                <h3>About Us</h3>
                <p>Find out more about Posly</p>
            </li>
        </ul>
    </div>
  )
}

export default SettingOption;