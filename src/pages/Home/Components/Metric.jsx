import React from 'react'

import Cash from './Images/metric1.png';

import "./metric.scss";

export default function Metric() {
  return (
    <div className='metric-card'>
        <div className="upper">
            <img src={Cash} alt="Icon" />
            <div className='stat'>7</div>
        </div>
        <div className="lower">
            <div>50%<br/>Funding Rase</div>
        </div>
    </div>
  )
}
