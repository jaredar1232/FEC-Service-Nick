import React,{ useState } from 'react'
import Headline from '../sidebar/headline/Headline.jsx'



const NykeMain = () => {

  /* Create Modal */

  const [modal, setModal] = useState(false)

  const removeModal = () => { setModal(false)}
  return(
    <div id='nyke_main_nl'>
      <div id='nyke_product_display'>
        <div id='lg_pic_nl' onClick={() => setModal(!modal)}></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
        <div id='lg_pic_nl'></div>
      </div>
      {modal && <PictureModal removeModal={removeModal}/>}
    </div>
  )
}

const PictureModal = (props) => {
  return (
    <div className='modal'>
        <div className='close_modal' onClick={props.removeModal}>X</div>
        <div className='modal_scroll'>
          <div id='modal_headline'>
            <div id='modal_price'>
              <h2>Men's Shoe</h2>
              <div>$ 140</div>
            </div>
            <h1 id='modal_product_title'>Nike Blazer Mid Premium</h1>
          </div>
          <div className='modal_pic_scroll'>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
            <div id='modal_pic_nl'></div>
          </div>
        </div>
    </div>
  )
}

export default NykeMain