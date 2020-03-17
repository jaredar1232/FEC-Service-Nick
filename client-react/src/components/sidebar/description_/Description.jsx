import React,{ useState } from 'react'

const Description = () => {

  /* Create a modal on click of readmore */


  const randomStyleIDGenerator = () => {
    let letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
    let fourcode = Math.floor(Number.parseFloat(Math.random()).toPrecision(4)*10000);
    let twocode = Math.floor(Number.parseFloat(Math.random()).toPrecision(2)*100);

    let id = `${letters}${fourcode} - ${twocode}`
    return id
  }
  let id = randomStyleIDGenerator()
  return(
    <div id='sidebar_wrapper'>
      <div id='sidebar_description'>
        <p>The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story.</p>
        <ul>
          <li>Shown: Light Bone/Photo Blue/Team Red/Terra Blush</li> {/* These will be tags for mongoDB */}
          <li>Style: {id}</li>{/* Can Make a Random Code here in the server */}
        </ul>
    </div>
      <button className='readmorebtn'><span>Read More</span></button>
      <div className='readmore' ></div>
    </div>
  )
}


export default Description;