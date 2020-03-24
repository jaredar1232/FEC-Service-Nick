import React, {useState} from 'react'

const SizingGuide = ({currentShoe, updateCurrentOrder}) => {
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
  let [selectedSize, setSelectedSize] = useState(null)

  const selectSize = (size) => {
    setSelectedSize(size)
  }
  return (
    <div id='size_guide_wrapper'>
      <div id='size_guide_header'>
        <label>Select Size</label>
        <a href="https://www.nike.com/us/en_US/sfg/unisex-shoe-sizing-chart">Size Guide</a>
      </div>
      <ul id='size_grid'>
        {Object.entries(sizes).map(([key, value]) => (
            <SizeItem
                value={value}
                key={key}
                size={key}
                updateCurrentOrder={updateCurrentOrder}
                selected={selectedSize == key}
                selectSize={selectSize}
            />
        ))}
      </ul>
    </div>
  )
}

const SizeItem = ({value, size, updateCurrentOrder, selectSize, selected}) => {
  return (
    <li className={`
                    ${value === true ? `available` : `unavailable`}
                    ${selected && `selectedSize`}
                    `}
        id='size_item'
        onClick={() => {
          updateCurrentOrder('size', size)
          selectSize(size)
        }}
        >
          {size}
      </li>
  )
}




export default SizingGuide



/*


          <li
                  className={`
                              ${value === true ? `available` : `unavailable`}

                              `}
                  id='size_item'
                  key={key}
                  onClick={() => {updateCurrentOrder('size', key)}}
                  >
                    {key}
                </li>


*/