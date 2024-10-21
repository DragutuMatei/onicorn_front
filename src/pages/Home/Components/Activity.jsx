import React from 'react'
import "./activity.scss";

import activ1 from "./Images/activ1.png";
import logoLog from "./Images/logoLong.png";

export default function Activity() {

    const presents = [
        {
            "title": "MetaCloud",
            "tag": "Tokenomics Update",
            "desc": "MetaCloud has revised its tokenomics model, improving token utility and investor incentives. Review the updated model now",
            "img": "./Images/activ1.png",
        },
        {
            "title": "Quantum Bridge",
            "tag": "Funding Progress",
            "desc": "Quantum Bridge has reached 75% of its funding goal. It's attracting significant interest from institutional investors.",
            "img": "./Images/logoLong.png",
        },
        {
            "title": "MetaCloud",
            "tag": "Tokenomics Update",
            "desc": "MetaCloud has revised its tokenomics model, improving token utility and investor incentives. Review the updated model now",
            "img": "./Images/activ1.png",
        },{
            "title": "MetaCloud",
            "tag": "Tokenomics Update",
            "desc": "MetaCloud has revised its tokenomics model, improving token utility and investor incentives. Review the updated model now",
            "img": "./Images/activ1.png",
        },
        {
            "title": "Quantum Bridge",
            "tag": "Funding Progress",
            "desc": "Quantum Bridge has reached 75% of its funding goal. It's attracting significant interest from institutional investors.",
            "img": "./Images/logoLong.png",
        },
        {
            "title": "MetaCloud",
            "tag": "Tokenomics Update",
            "desc": "MetaCloud has revised its tokenomics model, improving token utility and investor incentives. Review the updated model now",
            "img": "./Images/activ1.png",
        },
    ];

    return (
        <div className="activity">
            <div className="title">Recent activity</div>
            <div className="cards">
                {presents.map((cardValues, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='present'><img src={activ1} alt="Card" /></div>
                            <div className='card-right'>
                                <div>
                                    <div className="title">{cardValues.title}</div>
                                    <div className='tag'>{cardValues.tag}</div>
                                </div>
                                <div className="desc">{cardValues.desc}</div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
