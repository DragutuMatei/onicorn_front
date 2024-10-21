import React from 'react'

import './draft.scss';
import D from "./Images/D.png";

export default function Draft() {
  return (
    <div className='contain'>
        <img src={D} alt="Index" className='preview'/>
        <div className="details">
            <div className="subtitle">Workspace</div>
            <div className="title">Dstudio space</div>
        </div>
    </div>
  )
}
