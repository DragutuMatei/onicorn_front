import React from 'react'

import './projects.scss';
import Panel from '../Home/Components/Panel';

import Notif from "./Images/notification.png";
import searchIcon from "./Images/src.png";
import testUserImage from './Images/logCard.png';
import Settings from './Images/settings.png';
import cadLeft from './Images/catLeft.png'
import cadRight from './Images/catRight.png'
import ProjectCard from './Components/ProjectCard';

export default function Projects() {
    return (
        <div className="projects">
            <Panel />
            <div className='search'>
                <div className="bar">
                    <img src={searchIcon} alt="Search Icon" />
                    <input type="text" placeholder='Search Project' />
                </div>
                <div className="button"><img src={Notif} alt="Notifications" className='small' /></div>
                <div className="button"><img src={testUserImage} alt="User Icon" /></div>
            </div>
            <div className="feed-wrap">
                <div className='feed'>

                    <h3 className='hello'>All Projects</h3>

                    <div className="dropdowns">
                        <div className="drop card">
                            <img src={cadLeft} alt="Categories" className='left' />
                            <div className="mid">Categories</div>
                            <img src={cadRight} alt="Arrows" className='right' />
                        </div>
                        <div className="drop card">
                            <img src={cadLeft} alt="Categories" className='left' />
                            <div className="mid">Categories</div>
                            <img src={cadRight} alt="Arrows" className='right' />
                        </div>
                        <div className="drop card">
                            <img src={cadLeft} alt="Categories" className='left' />
                            <div className="mid">Categories</div>
                            <img src={cadRight} alt="Arrows" className='right' />
                        </div>
                        <div className="drop card">
                            <img src={cadLeft} alt="Categories" className='left' />
                            <div className="mid">Categories</div>
                            <img src={cadRight} alt="Arrows" className='right' />
                        </div>
                    </div>

                    <div className="setup card">
                        <div className="talk">
                            <div className="title">Let's start exploring!</div>
                            <div className="desc">Let's set up your preferences to discover the best projects for you.</div>
                        </div>
                        <div className='button'>
                            <img src={Settings} alt="Settings" />
                            <button>Prefference Settings</button>
                        </div>
                    </div>

                    <div className="projects">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>

                </div>
            </div>
        </div>
    )
}
