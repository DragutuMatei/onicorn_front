import React from 'react'

import postBack from './Images/postBack1.png';

import './shortPost.scss';

export default function ShortPost() {
  return (
    <div className="shortPost">
        <div className="front">
            <img src={postBack} alt="background" />
        </div>
        <div className="title">AstraFund</div>
        <div className="tag">DeFi</div>
        <div className="desc">Decentralized investment platform that allows users to create and manage their own mutual funds, leveraging smart contracts for automated portfolio management and transparency.</div>
    </div>
  )
}
