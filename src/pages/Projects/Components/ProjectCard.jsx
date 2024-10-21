import React from 'react'

import cardBack from './Images/card1.png';
import Btn from './Images/btn.png';
import './projectCard.scss';

export default function ProjectCard() {

    const data = {
        'title': 'MetaCloud',
        'tag': 'DeFi',
        'supply': '100 million ASTR tokens',
        'stage': 'MVP completed, pilot testing underway',
        'size': '$30 billion mutual funds market',
        'status': 'Raised $5 million in Seed, seeking $10 million in Series A',
        'partner': 'Collaborations with 3 major solar panel manufacturers',
        'desc': 'Decentralized investment platform that allows users to create and manage their own mutual funds, leveraging smart contracts for automated portfolio management and transparency.'
    };


    return (
        <div className='project'>
            <div className="top">
                <img src={cardBack} alt="Preview" className='preview'/>
                <div className="details">
                    <div className="title">{data.title}</div>
                    <div className="tag">{data.tag}</div>
                    <div className="supply">
                        <div className="name">Token Supply:</div>
                        <div className="value">{data.supply}</div>
                    </div>
                    <div className="stage">
                        <div className="name">Development Stage:</div>
                        <div className="value">{data.stage}</div>
                    </div>
                    <div className="size">
                        <div className="name">Market Size:</div>
                        <div className="value">{data.size}</div>
                    </div>
                    <div className="status">
                        <div className="name">Funding Status:</div>
                        <div className="value">{data.status}</div>
                    </div>
                    <div className="partner">
                        <div className="name">Partnerships:</div>
                        <div className="value">{data.partner}</div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="desc">{data.desc}</div>
                <button className='more'>
                    <img src={Btn} alt="button" />
                    <div>View Details</div>
                </button>
            </div>
        </div>
    )
}
