import React,{ useState } from 'react'

const Description = () => {
  const randomStyleIDGenerator = () => {
    let letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
    let fourcode = Math.floor(Number.parseFloat(Math.random()).toPrecision(4)*10000);
    let twocode = Math.floor(Number.parseFloat(Math.random()).toPrecision(2)*100);

    let id = `${letters}${fourcode} - ${twocode}`
    return id
  }
  let id = randomStyleIDGenerator()

  const [modal, setModal] = useState(false)

  const removeModal = () => { setModal(false)}
  return(
    <div id='sidebar_wrapper'>
      <div id='sidebar_description'>
        <p>The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story.</p>
        <ul>
          <li>Shown: Light Bone/Photo Blue/Team Red/Terra Blush</li> {/* These will be tags for mongoDB */}
          <li>Style: {id}</li>
        </ul>
    </div>
      <button className='readmorebtn' onClick={()=>setModal(!modal)}><span>Read More</span></button>
      {modal && <ReadMoreModal removeModal={removeModal}/>}
    </div>
  )
}



const ReadMoreModal = (props) => {
  return (
    <div className='read_more_modal'>


          <div className='read_more_modal_headline'>
            <button onClick={props.removeModal} >
              <div className='read_more_modal_headline_content'>
                <div className='read_more_modal_pic'>_pic</div>
                <div className='read_more_modal_headline_info'>
                  <p>Nike Blazer Mid Premium</p>
                  <p>$ 140</p>
                </div>
              </div>
            </button>
            <div className='read_more_modal_close' onClick={props.removeModal}>X</div>
          </div>

        <div className='read_more_modal_guts'>
          <div className='read_more_modal_info'>
              <b>BIG COMFORT. BIGGER PERSONALITY.</b>
              <p>
                The Nike React Presto Premium features an innovative React foam midsole that delivers a futuristic look and bouncy, lightweight feel for all-day comfort with a whole lot of personality.
              </p>
              <div>
                <b>Benefits</b>
                <p> Nike React technology delivers an extremely smooth ride.
                    Stretchy mesh upper provides breathability and a relaxed feel.
                    Numerous lacing options let you customize the look.
                    Stretchy textile sleeve for a sock-like fit and lets you take the shoe on and off easily.
                    TPU cage reimagines the classic Presto cage in a more organic shape, providing a contoured fit to your foot.
                    Rubber toe tip enhances durability.
                </p>
              </div>
              <ul>
                <b>Product Details</b>
                <li>Not intended for use as Personal Protective Equipment</li>
                <li> Shown: Pistachio Frost/White/Black</li>
                <li>Style: CN7664-300</li>
              </ul>
          </div>
        </div>
  </div>
  )
}


export default Description;