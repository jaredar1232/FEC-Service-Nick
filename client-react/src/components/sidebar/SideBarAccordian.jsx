import React, { useState, useEffect } from 'react'
import SlideDown from '../Portal&animation/SlideDown.jsx'
const SideBarAccordian = () => {

  const [dropdown, setDropdown] = useState(false)


  return(
    <div id='sidebar_accordian_wrapper'>
      <div className='jaredConnection'>



        <button id='sidebar_accordian_button' onClick={ () => setDropdown(!dropdown) }>
          <div className='sidebar_accordian_button_2'>
            <div><h3>Free Shipping & Returns</h3></div>
            <div className={`${dropdown ? "dropdown_rotate" : ""}`}><span>^</span></div>
          </div>
            <SlideDown show={dropdown}>
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
            </SlideDown>
        </button>

      </div>

    </div>
  )
}


export default SideBarAccordian