import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'

import SideBar from './components/sidebar/SideBar.jsx'
import NykeMain from './components/NykeMain/NykeMain.jsx'
import shoeExample from './mockData.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed',
      currentShoe: shoeExample,
      similiarShoes: [],
      currentOrder: {},
      submitOrder: false,
    };
    this.getShoeColorData = this.getShoeColorData.bind(this)
    this.updateCurrentOrder = this.updateCurrentOrder.bind(this)
    this.getShoe = this.getShoe.bind(this)
    this.purchaseShoe = this.purchaseShoe.bind(this)
    this.closePurchaseShoe = this.closePurchaseShoe.bind(this)
  }

  // const [state, setState] = useState({view: 'Feed'})

  updateCurrentOrder(orderKey, orderVal){
    //passdown to sizing chart
    let {currentOrder} = this.state;
    const currentState = currentOrder;
    currentState[orderKey] = orderVal;
    this.setState({currentOrder: currentState})
    console.log(this.state.currentOrder)
  }

  componentDidMount(){
    this.getShoe()
  }

  getShoe(){
    Axios.get(`http://localhost:3000/api/shoes/react`)
      .then((response)=>{
        this.setState({
          currentShoe: response.data
        })
      })
      .catch(e => window.alert('Fetch Request Failed'))
  }

  //Pass a function down to sidebar color way that will send a get request
  getShoeColorData(id, color){
    Axios.get(`http://localhost:3000/shoes/${id}/${color}`)
      .then(data => {})
      .catch(e => window.alert('Something Fucked Up'))
  }
  getSimiliarShoes(){}


  purchaseShoe(){
    this.setState({
      confirmPurchase: true
    })
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.closePurchaseShoe()
      }, 3000)
    })
  }
  closePurchaseShoe(){
    this.setState({
      confirmPurchase: false
    })
  }

  render() {
    return (
      <div id='main_nl'>
        <div id='base_nl'>
          <NykeMain currentShoe={this.state.currentShoe} />
          <SideBar currentShoe={this.state.currentShoe}
                  updateCurrentOrder={this.updateCurrentOrder}
                  purchaseShoe={this.purchaseShoe}
                  />
          {this.state.confirmPurchase && <PurchaseModal
                    currentShoe={this.state.currentShoe}
                    closePurchaseShoe={this.closePurchaseShoe}
          />}
        </div>
      </div>
    );
  }
}

const PurchaseModal = ({currentShoe, closePurchaseShoe}) => {
  return (
    <div className='purchase_modal'>
      <div className='purchase_modal_detail_box'>
        <div className='purchase_modal_headline'>
          <p><i class="fas fa-check-circle"></i> Added To Cart!</p>
          <div onClick={closePurchaseShoe}>X</div>
        </div>
        <div className='purchase_modal_product'>
          <div className='purchase_modal_product_pic'>
            <img src={currentShoe.productPictures[0]}></img>
          </div>
          <div>
            <h4>{currentShoe.name}</h4>
            <p>Size: </p>
            <p>$ {currentShoe.price}</p>
          </div>
        </div>

        <div className='purchase_modal_buttons'>
          <button className='cartbtn viewCartbtn'>View Cart</button>
          <button className='cartbtn checkoutBtn'>Checkout</button>
        </div>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));