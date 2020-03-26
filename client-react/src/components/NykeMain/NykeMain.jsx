import React,{ useState } from 'react'
import Headline from '../sidebar/headline/Headline.jsx'
import MainPictureModal from './MainPictureModal.jsx'


const NykeMain = ({currentShoe}) => {
  //toggle modal for pictures
  const [modal, setModal] = useState(false)
  //pass function down to toggle modal
  const removeModal = () => { setModal(false)}

  return(
    <div id='nyke_main_nl'>
      <div id='nyke_product_display'>
        {currentShoe.productPictures.map((picSrc, index) => {
          return (
          <div className='lg_pic_nl' onClick={() => setModal(!modal)} key={index}>
              <img src={picSrc} alt={currentShoe.name} />
          </div>
          )
        })}
      </div>
      {modal && <MainPictureModal removeModal={removeModal} currentShoe={currentShoe}/>}
    </div>
  )
}

export default NykeMain