import React from 'react'

import LogoFull from './Images/logoLong.png';
import Dash from './Images/home.png';
import Proj from './Images/projects.png';
import Mess from './Images/messages.png';
import Watc from './Images/watch.png';
import Acc from './Images/account.png';
import Sets from './Images/settings.png';

import "./panel.scss";

export default function Panel() {
    return (
        <div className='panel'>
            <div>
                <img src={LogoFull} alt='Logo' className='logo' />
                <div className="menu">
                    <label htmlFor="menu">Menu</label>
                    <div className="option highlight">
                        <img src={Dash} alt="option logo" className='option-logo' />
                        <p className='option-text'>Dashboard</p>
                    </div>
                    <div className="option">
                        <img src={Proj} alt="option logo" className='option-logo' />
                        <p className='option-text'>All projects</p>
                    </div>
                    <div className="option">
                        <img src={Mess} alt="option logo" className='option-logo' />
                        <p className='option-text'>Messages</p>
                    </div>
                    <div className="option">
                        <img src={Watc} alt="option logo" className='option-logo' />
                        <p className='option-text'>My watchlist</p>
                    </div>
                    <label htmlFor="menu">Account</label>
                    <div className="option">
                        <img src={Acc} alt="option logo" className='option-logo' />
                        <p className='option-text'>Account</p>
                    </div>
                    <div className="option">
                        <img src={Sets} alt="option logo" className='option-logo' />
                        <p className='option-text'>Settings</p>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="option">
                    <p className='option-text'>Mode
                    </p>
                </div>
                <div className="option">
                    <p className='option-text'>Terms & Conditions</p>
                </div>
            </div>

        </div>
    )
}
