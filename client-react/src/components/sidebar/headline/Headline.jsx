import React from 'react'

const Headline = ({currentShoe}) => {
  // let cost = Math.trunc(Math.random() * (210-90) + 90)

  return(
    <div id='sidebar_headline'>
      <div id='sidebar_price'>
        <h2>Men's Shoe</h2>
        <div>$ {currentShoe.price}</div>
      </div>
      <h1 id='sidebar_product_title'>{currentShoe.name}</h1>
    </div>
  )
}

export default Headline