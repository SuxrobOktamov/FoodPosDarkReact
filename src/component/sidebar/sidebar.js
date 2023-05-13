import React from 'react';
import { NavLink } from 'react-router-dom';
import Vector from '../../img/Vector.svg';


function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="Sidebar-list">
            <li className="Sidebar-item ">
                <div className="Sidebar-link img" >
                    <img src={Vector} alt="vector" />
                </div>
            </li>
            <NavLink to={'/Home'} className="Sidebar-item " title="Home">
                <div className="Sidebar-link">
                    <i className='bx bx-home-alt-2'></i>
                </div>
            </NavLink>
            <NavLink to={'/Discount'} className="Sidebar-item" title="Discount">
                <div className="Sidebar-link">
                    <i className='bx bxs-discount'></i>
                </div>
            </NavLink>
            <NavLink to={'/Dashboard'} className="Sidebar-item" title="Dashboard">
                <div className="Sidebar-link">
                    <i className='bx bxs-dashboard'></i>
                </div>
            </NavLink>
            <NavLink to={'/Message'} className="Sidebar-item" title="Message">
                <div className="Sidebar-link">
                    <i className='bx bx-message-square-check'></i>
                </div>
            </NavLink>
            <NavLink  to={'/Notification'}  className="Sidebar-item" title="Notification">
                <div className="Sidebar-link">
                    <i className='bx bx-bell'></i>
                </div>
            </NavLink>
            <NavLink to={'/Setting'} className="Sidebar-item" title="Setting">
                <div className="Sidebar-link">
                    <i className='bx bx-cog'></i>
                </div>
            </NavLink>
            <NavLink to={'/LogOut'} className="Sidebar-item" title="Log Out">
                <div className="Sidebar-link">
                    <i className='bx bx-log-out-circle'></i>
                </div>
            </NavLink>
        </ul>
    </div>
  )
}

export default Sidebar;