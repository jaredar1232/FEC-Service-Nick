import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'

import SideBar from './components/sidebar/SideBar.jsx'
import NykeMain from './components/NykeMain/NykeMain.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed'
    };
    this.getShoeColorData = this.getShoeColorData.bind(this)
    this.selectShoeSize = this.selectShoeSize.bind(this)
  }



  //passdown to sizing chart
  selectShoeSize(size){
    this.setState({
      currentOrder: size
    })
  }
  //Pass a function down to sidebar color way that will send a get request
  getShoeColorData(id, color){
    Axios.get(`http://localhost/shoes/${id}/${color}`)
      .then(data => {
        this.setState({
          currentShoe: data
        })
      })
      .catch(e => window.alert('Something Fucked Up'))
  }

  render() {
    return (
      <div id='main_nl'>
        <div id='base_nl'>
          <NykeMain />
          <SideBar />
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));