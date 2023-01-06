import React from 'react'
import "../CSS/AppMenu.css"
import dashboardLogo from '../Media/dashboard.png'
import checkInLogo from '../Media/check-in.jpg'
import checkOutLogo from '../Media/check-out.jpg'

const AppMenu = ({tab, setTab}) => {

  const handleTabChange = (tabName) => {
    setTab(tabName);
  }

  return (
    <div className='Menu'>
      <div className='Menu-Item'
        style={tab === "Dashboard"? {backgroundColor: 'rgb(226, 216, 215)', borderRadius: '8px'} : {}}
        onClick={() => handleTabChange("Dashboard")}
      >
        <img src={dashboardLogo} alt = {<div/>} height={'45px'}/>
        <span>Dashboard</span>
      </div>
      <div className='Menu-Item'
        style={tab === "CheckIn"? {backgroundColor: 'rgb(226, 216, 215)', borderRadius: '8px'} : {}}
        onClick={() => handleTabChange("CheckIn")}
      >
        <img src={checkInLogo} alt = {<div/>} height={'50px'}/>
        <span>Check In</span>
      </div>
      <div className='Menu-Item'
        style={tab === "CheckOut"? {backgroundColor: 'rgb(226, 216, 215)', borderRadius: '8px'} : {}}
        onClick={() => handleTabChange("CheckOut")}
      >
        <img src={checkOutLogo} alt = {<div/>} height={'40px'}/>
        <span>Check Out</span>
      </div>
    </div>
  )
}

export default AppMenu