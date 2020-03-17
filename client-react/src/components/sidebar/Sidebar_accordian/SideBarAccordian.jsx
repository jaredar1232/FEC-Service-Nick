import React, { useState, useEffect } from 'react'



const SideBarAccordian = () => {
  const [dropdown, setDropdown] = useState(false)



  return(
    <div id='sidebar_accordian_wrapper'>
      <div>
        <button id='sidebar_accordian_button' onClick={ () => setDropdown(!dropdown) }>
          <div>
            <div><h3>Free Shipping & Returns</h3></div>
            <div className={`${dropdown ? "dropdown_rotate" : ""}`}><span>^</span></div>
          </div>
          <div id='sidebar_accordian_contents' className={`${dropdown ? "active_dropdown" : "inactive_dropdown_nl"}`}>
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


export default SideBarAccordian