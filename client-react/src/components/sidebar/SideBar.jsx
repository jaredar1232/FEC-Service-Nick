import React, { useState, useEffect } from 'react'
import SizingGuide from './sizing_chart/Sizing.jsx'
import SideBarAccordian from './Sidebar_accordian/SideBarAccordian.jsx'
import Description from './description_/Description.jsx'
import Headline from './headline/Headline.jsx'


const SideBar =() => {
  return(
    <div id='sidebar_nl'>
      <div id='sidebar_contents'>
        <Headline />
        <Colorway />
        <SizingGuide />
        <BuyButtons />
        <Description />
        <SideBarAccordian />
      </div>
    </div>
  )
}



const Colorway = () => {
  return (
    <div id='colorway_wrapper'>
      <ul id='colorway_list'>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
        <li id='colorway_pic'>_pic</li>
      </ul>
    </div>
  )
}


const BuyButtons = () => {
  return (
    <div id='button_wrapper'>
      <button className='add_to_cart cartbtn'>Add To Cart</button>
      <button className='favorite cartbtn'>Favorite</button>
    </div>
  )
}





export default SideBar