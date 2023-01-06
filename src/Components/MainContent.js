import React from 'react'
import Dashboard from './Dashboard.js';
import CheckIn from './CheckIn.js';
import CheckOut from './CheckOut.js';

const MainContent = ({tab}) => {
  return (
    <div className='Main-Content'>
        {tab === "Dashboard" && <Dashboard/>}
        {tab === "CheckIn" && <CheckIn/>}
        {tab === "CheckOut" && <CheckOut/>}
    </div>
  )
}

export default MainContent