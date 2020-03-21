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
    };
    this.getShoeColorData = this.getShoeColorData.bind(this)
    this.selectShoeSize = this.selectShoeSize.bind(this)
    this.getShoe = this.getShoe.bind(this)
  }

  // const [state, setState] = useState({view: 'Feed'})

  //passdown to sizing chart
  selectShoeSize(size){
    this.setState({
      currentOrder: size
    })
  }

  componentDidMount(){
    this.getShoe()

  }
  getShoe(){
    Axios.get(`http://localhost:3000/api/shoes/react`)
      .then((response)=>{
        //console.log(response.data)
        this.setState({
          currentShoe: response.data
        })
        //console.log(this.state)
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

  render() {
    return (
      <div id='main_nl'>
        <div id='base_nl'>
          <NykeMain currentShoe={this.state.currentShoe} />
          <SideBar currentShoe={this.state.currentShoe} />
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));