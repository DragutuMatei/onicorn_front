import React, { useState } from 'react'

import "./forgot.scss";
import logCard from "./images/logCard.png";

export default function Forgot() {

    const [changePass, setChangePass] = useState(true);
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <div className='login'>
            <div className='login-aligner'>
                <div className='login-wrap'>
                    <div className='dialog'>
                        {changePass ?
                            <h1>Forgot Password</h1> :
                            <h1>Change Password</h1>
                        }
                        <p>Minimizing Dead Times and Streamlining Logistics</p>
                    </div>
                    <div className='user-data'>
                        <div className='data-wrap'>
                            <div className='input'>
                                <label htmlFor="user-input">Email</label>
                                <input type="text" id='user-input' placeholder='Input your Email' />
                            </div>
                            {changePass ?
                                <>
                                    <div className='input'>
                                        <label htmlFor="pass-input">Password</label>
                                        <input type="password" id='pass-input' onChange={(event) => { setPass(event.target.value.trim()) }} placeholder='' />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="pass-input">Confirm Password</label>
                                        <input type="password" id='pass-input' onChange={(event) => { setConfirm(event.target.value.trim()) }} placeholder='' />
                                    </div>
                                </> :
                                <></>
                            }
                        </div>
                    </div>
                    <div className='signin'>
                        <button id='sign-button'>Send E-mail</button>
                    </div>
                </div>
            </div>
            <div className='image-card'>
                <img src={logCard} alt="cardImage" className='bg-card' />
            </div>
        </div>
    )
}
