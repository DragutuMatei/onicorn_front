import React from 'react'
import Panel from './Components/Panel';

import './home.scss';
import Notif from "./Images/notification.png";
import searchIcon from "./Images/src.png";
import testUserImage from './Images/logCard.png';
import Activity from './Components/Activity';
import Settings from './Images/settings.png';
import Metric from './Components/Metric';
import ShortPost from './Components/ShortPost';
import Draft from './Components/Draft';

export default function Home() {
  return (
    <div className="home">
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

          <h3 className='hello'>Good afternoon, Alexandra!</h3>
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

          <div className='metrics card'>
            <div className="title">Metrics of the Week</div>
            <div className='list'>
              <Metric />
              <Metric />
              <Metric />
              <Metric />
              <Metric />
            </div>
          </div>

          <div className="listing card">
            <div className="title">
              <div className="main">Latest Listing</div>
              <div className="see">See All</div>
            </div>
            <div className="list">
              <ShortPost />
              <ShortPost />
              <ShortPost />
              <ShortPost />
            </div>
          </div>

          <div className="drafts card">
            <div className="title">Draft Container 1</div>
            <div className="list">
              <Draft />
              <Draft />
              <Draft />
              <Draft />
            </div>
          </div>

        </div>
        <Activity />
      </div>
    </div>
  )
}
