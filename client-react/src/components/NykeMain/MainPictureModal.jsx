import React from 'react'


const MainPictureModal = ({removeModal, currentShoe}) => {
  return (
    <div className='modal'>
        <div className='close_modal' onClick={removeModal}>X</div>
        <div className='modal_scroll'>
          <div id='modal_headline'>
            <div id='modal_price'>
              <h2>Men's Shoe</h2>
              <div>{currentShoe.price}</div>
            </div>
            <h1 id='modal_product_title'>{currentShoe.name}</h1>
          </div>
          <div className='modal_pic_scroll'>
            {currentShoe.productPictures.map((picSrc, index) => {
              return (
                <img src={picSrc} key={index} id="modal_pic_nl"/>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default MainPictureModal