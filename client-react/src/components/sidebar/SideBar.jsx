import React from 'react'
import SizingGuide from './Sizing.jsx'

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

const Headline = () => {
  return(
    <div id='sidebar_headline'>
      <div id='sidebar_price'>
        <h2>Men's Shoe</h2>
        <div>$ 140</div>
      </div>
      <h1 id='sidebar_product_title'>Nike Blazer Mid Premium</h1>
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
      <button className='readmorebtn'><span>Read More</span></button>
      <div className='readmore' ></div>
    </div>
  )
}


const SideBarAccordian = () => {
  return(
    <div id='sidebar_accordian_wrapper'>
      <div>
        <button id='sidebar_accordian_button'>
          <div>
            <div><h3>Free Shipping & Returns</h3></div>
            <div><span>^</span></div>
          </div>
          <div id='sidebar_accordian_contents'>
            <div>
              <span>
                Free standard shipping and free 30-day returns for Nike Members.
                <u><a href='https://www.nike.com/help/a/free-shipping'>Learn More.</a></u>
                <u><a href='https://www.nike.com/help/a/return-exceptions'>Return policy exceptions</a></u>
              </span>
            </div>
            <ul id='accordian_return'>
              <li>Standard / Arrives 2-4 Business Days</li>
              <li>Two-Day / Arrives 2-3 Business Days</li>
              <li>Next-Day / Arrives 1-2 Business Days</li>
            </ul>
            <u>
              <a href='Pick-up available at select Nike Stores.'>
              Pick-up available at select Nike Stores.
              </a>
            </u>
          </div>
        </button>
        <button id='sidebar_accordian_button'>
          <div><h3>Reviews (17)</h3></div>
          <div><span></span></div>
        </button>
      </div>
    </div>
  )
}

export default SideBar