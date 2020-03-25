import React from 'react'

const Headline = ({currentShoe}) => {


  return(
    <div id='sidebar_headline'>
      <div id='sidebar_price'>
        <div>Men's Running Shoe</div>
        <div>$ {currentShoe.price}</div>
      </div>
      <h1 id='sidebar_product_title'>{currentShoe.name}</h1>
    </div>
  )
}

export default Headline