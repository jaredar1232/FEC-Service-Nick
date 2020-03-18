import React from 'react'

const Headline = () => {
  let cost = Math.trunc(Math.random() * (210-90) + 90)

  return(
    <div id='sidebar_headline'>
      <div id='sidebar_price'>
        <h2>Men's Shoe</h2>
        <div>$ {cost}</div>
      </div>
      <h1 id='sidebar_product_title'>Nike Blazer Mid Premium</h1>
    </div>
  )
}

export default Headline