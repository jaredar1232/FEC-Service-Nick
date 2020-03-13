import React from 'react'
import SizingGuide from './Sizing.jsx'

const SideBar =() => {
  return(
    <div id='sidebar_nl'>
      <div id='sidebar_headline'>
        <h3>Men's Shoe</h3>
        <div>$ 140</div>
        <h2>Nike React Vision</h2>
      </div>
      <Colorway />
      <SizingGuide />
      <BuyButtons />
      <Description />
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
      </ul>
    </div>
  )
}


const BuyButtons = () => {
  return (
    <div id='button_wrapper'>
      <button class='add_to_cart cartbtn'>Add To Cart</button>
      <button class='favorite cartbtn'>Favorite</button>
    </div>
  )
}


const Description = () => {
  return(
    <div id='sidebar_wrapper'>
      <div id='sidebar_description'>
        <p>The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story.</p>
        <ul>
          <li>Shown: Light Bone/Photo Blue/Team Red/Terra Blush</li>
          <li>Style: CD4373-001</li>
        </ul>
    </div>
      <button><span>Read More</span></button>
      <div className='readmore' ></div>
    </div>
  )
}

export default SideBar