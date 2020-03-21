import React from 'react'

const SizingGuide = ({currentShoe}) => {
/* Will need a request function passed down */
  let sizes = currentShoe.availSizes


  //replace X's with colons
  for(let key in sizes){
    if(key.includes('x')){
      let newValue = key.replace(/x/g, ".");
      //key = key.replace(/x/g, ".");
      sizes[newValue] = sizes[key]
      delete sizes[key]
      console.log(key, newValue)
    }
  }

  return (
    <div id='size_guide_wrapper'>
      <div id='size_guide_header'>
        <label>Select Size</label>
        <a href="https://www.nike.com/us/en_US/sfg/unisex-shoe-sizing-chart">Size Guide</a>
      </div>
      <ul id='size_grid'>
        {Object.entries(sizes).map(([key, value]) => {
          return <li className={value ? `available` : `unavailable`}
                  id='size_item'
                  key={key}
                  >
                    {key}
                </li>
        })}
      </ul>
    </div>
  )
}






export default SizingGuide